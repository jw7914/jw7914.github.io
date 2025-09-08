"use client";
import React from "react";
import { TextRevealCard } from "../ui/text-reveal";

export function Name() {
  return (
    <TextRevealCard
      text="Name"
      revealText="Jason Wu"
      className="w-full max-w-xs px-4 py-2"
    />
  );
}
