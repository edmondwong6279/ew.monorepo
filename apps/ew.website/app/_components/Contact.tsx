"use client";

import { CTA } from "@repo/ui/cta-button";
import { useEffect, useRef, useState } from "react";
import { createMessage } from "@/utils";
import { useFormState } from "react-dom";
import { SubmitButton } from "./SubmitButton";

const initialState = {
  errors: {
    message: undefined,
    name: undefined,
    email: undefined,
  },
  isSuccess: false,
};

const quotes = [
  "Hi Ed, I think your website is great!",
  "Greetings Human, I am absolutely not a bot and would like to get in touch.",
  "Hey Ed, I found a bug on your website...",
  "Enter message...",
  "Hello, I don't really know what to put here...",
];

export default function Contact() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [showForm, setShowForm] = useState(true);

  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    setQuote(quotes[Math.floor(quotes.length * Math.random())]);
  }, []);

  const [
    {
      errors: { name, email, message },
      isSuccess,
    },
    formAction,
  ] = useFormState(createMessage, initialState);

  useEffect(() => {
    if (isSuccess) {
      setShowForm(false);
    }
  }, [isSuccess]);

  return (
    <>
      <CTA
        className="w-40"
        onClick={() => {
          setShowForm(true);
          modalRef.current?.showModal();
        }}
      >
        Contact me
      </CTA>
      <dialog
        className="transition-all backdrop:backdrop-blur-md backdrop:transition-all rounded-lg px-5 py-4 overflow-auto text-off-white drop-shadow-lg bg-transparent w-auto md:w-3/4 max-w-[800px]"
        ref={modalRef}
      >
        <header className="flex justify-between gap-8 mb-4">
          <h1 className="text-off-white text-xl leading-2xl sm:text-2xl font-medium">
            Get in touch
          </h1>
          <button type="button" onClick={() => modalRef.current?.close()}>
            &times;
          </button>
        </header>
        {showForm ? (
          <form
            className="flex flex-col justify-center items-center gap-4"
            action={formAction}
          >
            <div className="flex gap-4 flex-col justify-between md:flex-row w-full">
              <label className="flex flex-col w-full">
                Name
                <input
                  required
                  minLength={1}
                  name="name"
                  className={`bg-gray-1 p-3 rounded-md outline-none transition-shadow ${name !== undefined ? "drop-shadow-red" : "drop-shadow-none"}`}
                />
              </label>
              <label className="flex flex-col w-full">
                Contact Email
                <input
                  required
                  minLength={1}
                  name="email"
                  type="email"
                  className={`bg-gray-1 p-3 rounded-md outline-none transition-shadow ${email !== undefined ? "drop-shadow-red" : "drop-shadow-none"}`}
                />
              </label>
            </div>
            <label className="flex flex-col w-full">
              Message
              <textarea
                required
                minLength={1}
                placeholder={quote}
                name="message"
                className={`bg-gray-1 p-3 rounded-md h-52 outline-none transition-shadow ${message !== undefined ? "drop-shadow-red" : "drop-shadow-none"}`}
              ></textarea>
            </label>
            <div className="h-4">
              {(name !== undefined ||
                email !== undefined ||
                message !== undefined) && (
                <p className="text-red-500 font-bold">
                  Please enter all fields.
                </p>
              )}
            </div>
            <SubmitButton />
          </form>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4">
            <h1>Thank you for getting in touch</h1>
            <p>I will respond as soon as possible</p>
            <CTA onClick={() => modalRef.current?.close()}>Return</CTA>
          </div>
        )}
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#EFDADA] via-[#EDEDED] to-[#878787] opacity-20 -z-10" />
      </dialog>
    </>
  );
}
