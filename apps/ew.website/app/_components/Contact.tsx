"use client";

import { CTA } from "@repo/ui/cta";
import { useRef } from "react";

export default function Contact() {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <CTA onClick={() => modalRef.current?.showModal()}>Contact me</CTA>
      <dialog
        className="transition-all backdrop:backdrop-blur-md backdrop:transition-all bg-gray-1 py-3 px-9 rounded-lg"
        ref={modalRef}
      >
        <header className="flex justify-between">
          <h3 className="text-off-white text-xs md:text-sm tracking-[1rem] font-light">
            Get in touch
          </h3>
          <CTA
            onClick={() => {
              modalRef.current?.close();
            }}
          >
            Close
          </CTA>
        </header>
        <form className="flex flex-col" method="dialog">
          <div>
            <label>
              Name<input></input>
            </label>
            <label>
              Contact Email<input></input>
            </label>
          </div>
          <label>
            Message<textarea></textarea>
          </label>
          {/* TODO add cta styling to this button */}
          <button type="submit">submit</button>
        </form>
      </dialog>
    </>
  );
}
