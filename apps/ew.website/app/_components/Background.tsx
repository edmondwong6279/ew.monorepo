"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Background(): JSX.Element {
  const [animateComplete, setAnimateComplete] = useState(true);

  return (
    <>
      <div className="absolute z-[-20] w-full h-full bg-gradient-to-b from-[rgba(239, 218, 218, 0.1)] via-[rgba(237, 237, 237, 0.1)] to-[rgba(135, 135, 135, 0.1)] opacity-50 pointer-events-none" />
      <div className="absolute h-full w-full pointer-events-none">
        <div className="sticky top-0 bottom-0 h-screen overflow-hidden -z-10">
          <motion.div
          // initial={{ scale: 2, transformOrigin: "center" }}
          // animate={{ scale: 1, transformOrigin: "center" }}
          // transition={{ duration: 1 }}
          // onAnimationComplete={() => setAnimateComplete(true)}
          >
            <div className="absolute z-[-20] w-[1100px] h-[1100px] left-[-1100px] bottom-[-50%] bg-gradient-to-b from-[#9F8383] to-[#706C8A] blur-[450px] rounded-full transform-[matrix(-0.42, -0.91, 0.89, -0.45, 0, 0)]" />
            <div
              className={`absolute z-[-20] right-[0] md:right-[calc(50%-500px)] top-[30%] w-[280px] h-[280px] md:w-[295px] md:h-[280px] rounded-full ${animateComplete ? "animate-spin-slow" : ""} bg-gradient-to-b from-[#D37373] to-[#2F14D7] blur-[55.7px]`}
            />
            <div className="absolute h-[400px] w-[500px] right-[-400px] bottom-[-260px] bg-gradient-to-b from-[#9F8383] to-[#706C8A] blur-[142.05px] rotate-30" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
