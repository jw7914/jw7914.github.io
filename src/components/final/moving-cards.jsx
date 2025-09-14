"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { CardSpotlight } from "../ui/card-spotlight";

export function MovingSkillCards() {
  return (
    <CardSpotlight>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={skills} direction="right" />
      </div>
    </CardSpotlight>
  );
}

const skills = [
  {
    quote: "JavaScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="w-8 h-10 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "HTML",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
        className="w-8 h-10 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "CSS",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
        className="w-8 h-10 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-8 h-10 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "Bash",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
        alt="Bash"
        className="w-8 h-10 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "C++",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
        alt="C++"
        className="w-8 h-10 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "React",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        alt="React"
        className="w-8 h-10 inline-block mr-2 align-middle"
      />
    ),
  },
  {
    quote: "Java",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
        alt="Java"
        className="w-8 h-10 inline-block mr-2 align-middle"
      />
    ),
  },
];
