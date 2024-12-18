"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { GradualSpacing } from "@/components/magicui/gradual-spacing";

function Herosection() {
  return (
    <div className="relative">
      <div>
        <WavyBackground
          colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
          waveWidth={50}
          blur={15}
          speed="fast"
          waveOpacity={0.6}
          backgroundFill="#000000"
          containerClassName="relative z-10"
          className="text-white text-center p-10 w-full"
        >
          <GradualSpacing
            className="staatliches-regular pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 hero-gradient-text"
            text="CREATING IMPACTFULL" duration={2}
          />

          <GradualSpacing
            className="staatliches-regular pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 hero-gradient-text"
            text="DIGITAL EXPERIENCES"
          />
        </WavyBackground>
      </div>
    </div>
  );
}

export default Herosection;
