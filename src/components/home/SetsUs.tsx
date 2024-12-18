"use client";
import { useState } from "react";

const SetsUs = () => {
  const [isHoveredOne, setIsHoveredOne] = useState(true);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
  const [isHoveredFour, setIsHoveredFour] = useState(false);

  return (
    <div className="bg-[#F8F8F8] flex p-8">
      <div className="w-1/2">
        <h1 className="text-6xl text-black font-bold">WHAT SETS US APART</h1>
      </div>
      <div className="w-1/2 flex flex-col gap-16">
        <h1
          className={`text-2xl hover:text-black ${
            isHoveredOne ? "text-black" : "text-gray-500"
          }`}
          onMouseEnter={() => setIsHoveredOne(true)}
          onMouseLeave={() => setIsHoveredOne(false)}
        >{`[01]  We work with you, not just for you. Your success is our priority.`}</h1>

<h1
          className={`text-2xl hover:text-black ${
            isHoveredTwo ? "text-black" : "text-gray-500"
          }`}
          onMouseEnter={() => setIsHoveredTwo(true)}
          onMouseLeave={() => setIsHoveredTwo(false)}
        >{`[02]  From the initial design to the final product, quality is at the forefront.`}</h1>

<h1
          className={`text-2xl hover:text-black ${
            isHoveredThree ? "text-black" : "text-gray-500"
          }`}
          onMouseEnter={() => setIsHoveredThree(true)}
          onMouseLeave={() => setIsHoveredThree(false)}
        >{`[03]  We love what we do, and it shows in every project we take on.`}</h1>

<h1
          className={`text-2xl hover:text-black ${
            isHoveredFour ? "text-black" : "text-gray-500"
          }`}
          onMouseEnter={() => setIsHoveredFour(true)}
          onMouseLeave={() => setIsHoveredFour(false)}
        >{`[04] We believe in open dialogue and keeping you informed every step of the way.`}</h1>
      </div>
    </div>
  );
};

export default SetsUs;
