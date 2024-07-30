import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const Accordion = ({ title, answer }: {title: String, answer: String}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between w-full items-center text-left px-4 pt-2 ${
            accordionOpen
            ?"bg-neutral-100 rounded-t-md"
            :"bg-white"
        }`}
      >
        <span>{title}</span>
        {accordionOpen ? (
          <IoChevronUpOutline className="text-indigo-500 ml-8" size={20} />
        ) : (
          <IoChevronDownOutline className="text-indigo-500 ml-8" size={20} />
        )}
      </button>
      <div
        className={`grid overflow-hidden text-slate-600 text-sm px-4 pb-2 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 bg-neutral-100 rounded-b-md"
            : "grid-rows-[0fr] opacity-0 bg-white"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
