"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { useDims, useWindowSize } from "@/hooks";
import { SkillGroups } from "@/types";

import CustomCard from "./CustomCard";

/**
 * SVG here is broken into xUnits
 * The first 3 is where the label for the skill goes.
 **/
const textOffset = 3;

export function SkillsGraph({ skillGroups }: { skillGroups: SkillGroups }) {
  const [ref, dims] = useDims<HTMLDivElement>();
  const winSize = useWindowSize();
  const [tooltip, setTooltip] = useState({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const [description, setDescription] = useState("");
  const [skillTitle, setSkillTitle] = useState("");

  const xUnit = Math.min(dims.width / 10, 116);
  const isMobile = (winSize?.width || 0) < 768;

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    const leftDiff = bounds?.x || 0;
    const topDiff = bounds?.y || 0;
    setShowTooltip(true);
    setTooltip({
      top: e.clientY - topDiff - 20,
      left: e.clientX - leftDiff - 120,
    });
  };

  return (
    <div
      className="w-full relative flex flex-col gap-3 overflow-hidden"
      ref={ref}
    >
      {/* Tooltip */}
      <div
        style={{ top: tooltip.top, left: tooltip.left }}
        className={`absolute pointer-events-none bg-gray-1 w-60 my-0 transition-opacity h-64 ${showTooltip ? "opacity-100" : "opacity-0"}`}
      >
        <CustomCard>
          <h3>{skillTitle}</h3>
          <p>{description}</p>
        </CustomCard>
      </div>
      {skillGroups.map(
        (
          {
            groupName,
            groupDescription,
            skills,
          }: {
            groupName: string;
            groupDescription?: string;
            skills: {
              id: number;
              title: string;
              description: string;
              value: number;
            }[];
          },
          idx1: number,
        ) => (
          <CustomCard key={idx1}>
            <h2 className="mt-0 text-3xl">{groupName}</h2>
            {groupDescription && <p>{groupDescription}</p>}
            {/* Plot the axes and labels first */}
            {/* Then plot each bar individually */}
            <svg
              className="w-full fill-slate-400"
              height={(skills.length + 1) * 65 - 5}
            >
              <text
                y={30}
                x={textOffset * xUnit - 5}
                className="text-sm"
                dominantBaseline="middle"
              >
                Proficiency
              </text>
              <line
                x1={textOffset * xUnit - 5}
                x2={textOffset * xUnit - 5}
                y1={65}
                y2={65 * (skills.length + 1) - 5}
                className="stroke-2"
              />
              {new Array(6).fill(undefined).map((_, idx2) => (
                <line
                  key={idx2}
                  x1={textOffset * xUnit + idx2 * xUnit}
                  x2={textOffset * xUnit + idx2 * xUnit}
                  y1={65}
                  y2={65 * (skills.length + 1) - 5}
                  className="opacity-50 stroke-1"
                />
              ))}
              {/* Add the description as a drop down or tick box thing/ hover state for desktop (try to not repeat dom)*/}
              {skills.map(
                (
                  {
                    title,
                    description,
                    value,
                  }: { title: string; description: string; value: number },
                  idx2: number,
                ) => {
                  return (
                    <g
                      key={idx2}
                      onMouseEnter={(e) => {
                        setSkillTitle(title);
                        setDescription(description);
                        handleMouseMove(e);
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => {
                        // hide tooltip
                        setShowTooltip(false);
                      }}
                    >
                      <text
                        y={(idx2 + 1) * 65 + 30}
                        x={xUnit * (textOffset - 0.5)}
                        className="text-sm"
                        textAnchor="end"
                      >
                        {title}
                      </text>
                      <motion.rect
                        key={idx2}
                        className={`opacity-50 ${idx1 % 2 === 0 ? "fill-yellow-300" : "fill-green-300"}`}
                        x={textOffset * xUnit}
                        y={(idx2 + 1) * 65}
                        height={60}
                        initial={"hidden"}
                        animate={"visible"}
                        variants={{
                          hidden: {
                            width: 0,
                          },
                          visible: {
                            width: value * xUnit,
                            transition: {
                              ease: "easeInOut",
                              duration: 0.5,
                              delay: 0.5 + 0.1 * idx2,
                            },
                          },
                        }}
                      ></motion.rect>
                      <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + 0.1 * idx2, duration: 0.5 }}
                        y={(idx2 + 1) * 65 + 30}
                        x={xUnit * 3.1}
                        className="text-sm"
                        dominantBaseline="middle"
                      >
                        {value}/5
                      </motion.text>
                    </g>
                  );
                },
              )}
            </svg>
          </CustomCard>
        ),
      )}
    </div>
  );
}
