"use client";
import React from "react";
import { Button } from "../ui/moving-border";
import { Github, Linkedin } from "lucide-react";

export function GithubButton() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        duration={3000} // Faster animation
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
      >
        <Github size={24} />
      </Button>
    </div>
  );
}

export function LinkedInButton() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        duration={4000} // Slower animation
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
      >
        <Linkedin size={24} />
      </Button>
    </div>
  );
}
