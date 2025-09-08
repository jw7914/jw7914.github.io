"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypeWriterName() {
  const gradientClass =
    "bg-gradient-to-tr from-blue-400 via-fuchsia-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent";
  const words = [
    {
      text: "Hello",
      className: gradientClass,
    },
    { text: " " },
    {
      text: "I'm",
      className: gradientClass,
    },
    { text: " " },
    {
      text: "Jason.",
      className: gradientClass,
    },
  ];
  return (
    <div className="flex" style={{ width: "420px" }}>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
