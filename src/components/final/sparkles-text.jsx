"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-start justify-start overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-xl lg:text-7xl font-bold text-left text-white relative z-20 self-start mt-12 ml-14">
        Jason Wu
      </h1>
      <div className="w-[22rem] h-32 relative self-start ml-14 mt-2">
        {/* Gradients */}
        <div className="absolute left-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute left-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        <div className="absolute left-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
        <div className="absolute left-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
