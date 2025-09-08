"use client";

import React from "react";
import { Carousel } from "@/components/ui/cards-carousel";
import { Code } from "lucide-react";

export function ExperienceCard({ position, company, date, bullets }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gray-700 hover:bg-gray-900 w-[20rem] md:w-[32rem] max-w-full h-[28rem] md:h-[30rem] flex flex-col">
      <div className="flex items-center space-x-2 mb-1">
        <Code size={20} className="text-purple-400" />
        <h3 className="text-lg font-semibold text-white">{position}</h3>
      </div>
      <div className="text-sm text-gray-400">
        <span>{company}</span>
      </div>
      <div className="text-xs text-gray-400 mb-1">
        <span>{date}</span>
      </div>
      <ul className="list-disc list-inside text-gray-400 text-base pl-2 space-y-1 mt-2">
        {bullets && bullets.map((bullet, idx) => <li key={idx}>{bullet}</li>)}
      </ul>
    </div>
  );
}

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <ExperienceCard
      key={index}
      position={card.position}
      company={card.company}
      date={card.date}
      bullets={card.bullets}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    position: "Research Assistant",
    company: "New York University Tandon CSE Department",
    date: "Jan 2024 - May 2024",
    bullets: [
      "Assisted in cybersecurity research and published findings in a student journal.",
      "Built data visualization tools for research analysis using D3.js.",
    ],
  },
  {
    position: "Software Engineer Intern",
    company: "Acme Corp",
    date: "Jun 2023 - Aug 2023",
    bullets: [
      "Developed new features for the main product using React and Node.js.",
      "Improved application performance by 20%.",
    ],
  },
  {
    position: "iOS Developer",
    company: "Tech Innovations",
    date: "Sep 2022 - Dec 2022",
    bullets: [
      "Built and shipped 2 iOS apps to the App Store.",
      "Collaborated with designers to create seamless user experiences.",
    ],
  },
];
