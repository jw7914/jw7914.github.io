"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Github, Linkedin } from "lucide-react";

export function HoverGithubButton() {
  return (
    <div className="m-1 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
      >
        <Github size={24} color="#a259f7" />
      </HoverBorderGradient>
    </div>
  );
}

export function HoverLinkedinButton() {
  return (
    <div className="m-1 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
      >
        <Linkedin size={24} color="#a259f7" />
      </HoverBorderGradient>
    </div>
  );
}
