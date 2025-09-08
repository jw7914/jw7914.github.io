"use client";

import React from "react";
import { Carousel } from "@/components/ui/cards-carousel";
import { Code } from "lucide-react";

export function ExperienceCard({ position, company, date, bullets }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gray-700 hover:bg-gray-900 w-[20rem] md:w-[32rem] max-w-full max-h-[28rem] md:max-h-[30rem] flex flex-col overflow-y-auto">
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
    position: "Software Engineer Intern",
    company: "Google — YouTube Music Infra and Experiences Team",
    date: "May 2025 - Aug 2025",
    bullets: [
      "Authored design docs for a new YouTube notification connecting music artists and fans to enhance fan interaction and engagement for approximately 1 million music artists and their respective fan communities.",
      "Developed and validated the end-to-end flow of notification delivery, leveraging a ETL pipeline to listen to publisher-subscriber messages in real-time to ingest relevant data sources, enabling event-based notifications.",
      "Integrated cross-functional team feedback from Notifications, Playlists, Shorts, and internal teams to adhere to system specifications along with supporting ongoing migrations with appropriate unit tests.",
      "Secured approval from UX and Product Management to launch and ramp up the new YouTube notification,ensuring alignment with product strategy and user experience best practices.",
    ],
  },
  {
    position: "Introduction to Databases Course Assistant",
    company: "New York University Tandon CSE Department",
    date: "Jan 2024 - Present",
    bullets: [
      "Facilitated technical support during weekly office hours for a class of 50+ students, guiding them through MySQL database setup and coding assignments, equipping students to build and query relational databases",
      " Provided guidance to students to connect front-end user interfaces with with a back-end web framework with Flask or Node.js, enabling multi-user interactions on a shared database through web hosting and port forwarding.",
    ],
  },
  {
    position: "Software Engineer",
    company: "Robotics Design Team Vertically Integrated Projects",
    date: "Sep 2023 - May 2025",
    bullets: [
      "Implemented manual control using a Xbox controller over a wireless connection using the Robotic Operating System(ROS) framework for more fine grained locomotion over previous implementations in competition.",
      "Utilized an Intel RealSense camera and NumPy arrays to create a real-time occupancy grid map for obstacle detection and autonomously navigate craters and barriers within the competition arena.",
    ],
  },
  {
    position: "Mentee",
    company: "Google Software Engineering Program (G-SWEP) via Basta",
    date: "Sep 2024 – Jan 2025",
    bullets: [
      "Selected to pair program with a Google Software Engineer for 10 weeks to receive mentorship to prepare fortechnical and behavioral interviews through mock interviews and solving assigned LeetCode problems.",
    ],
  },
];
