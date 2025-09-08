"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function MovingSkillCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={skills} direction="right" speed="medium" />
    </div>
  );
}

const skills = [
  {
    quote: "JavaScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="w-8 h-8 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "HTML",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
        className="w-8 h-8 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "CSS",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
        className="w-8 h-8 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-8 h-8 inline-block mr-2 align-middle"
      />
    ),
  },
];
