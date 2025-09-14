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
        className="bg-slate-900 text-white border-slate-800 cursor-pointer"
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
        className="bg-slate-900 text-white border-slate-800 cursor-pointer"
      >
        <Linkedin size={24} />
      </Button>
    </div>
  );
}
