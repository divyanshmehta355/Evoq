"use client"
import { GradualSpacing } from "@/components/magicui/gradual-spacing";
import Carousel from '@/components/Carousel'
import React, { useState } from "react";
import Work from "@/components/about/Work";

function About() {
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);

  return (
    <div className="w-full bg-[#d9d9d9]">
      {/* Hero Section */}
      <div className="bg-black h-36 w-full flex justify-center items-center">
        <GradualSpacing
          className="staatliches-regular pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none text-transparent dark:from-white dark:to-slate-900/10 hero-gradient-text"
          text="ABOUT US"
        />
      </div>
      <div className="w-full flex justify-end bg-black">
        <h3 className="text-white p-2 text-sm md:text-base lg:text-lg">INDIA</h3>
      </div>
      <hr className="border-t border-gray-300" />

      {/* About Section */}
      <div className="w-full flex flex-col bg-black text-white">
        <div className="flex w-full justify-start p-2">
          <h1 className="p-4 staatliches-regular text-2xl md:text-3xl lg:text-4xl">WHO WE ARE</h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full bg-black text-white">
          <div className="hidden lg:block lg:w-1/3"></div>
          <div className="w-full lg:w-8/12 p-4 md:p-6">
            <h1 className="roboto-regular text-lg md:text-xl lg:text-2xl text-center">
              We are a team of dedicated UI/UX designers and web developers who are passionate
              about building digital experiences that matter. Our mission is to help businesses
              establish a strong online presence through websites that are both visually appealing
              and highly functional. We believe in the power of good design and solid development
              to drive success and growth for our clients.
            </h1>
          </div>
        </div>
      </div>

      {/* Wave SVG and Values Section */}
      <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#045769" fillOpacity="1" d="M0,192L60,160C120,128,240,64,360,42.7C480,21,600,43,720,58.7C840,75,960,85,1080,106.7C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </div>
        <div className="pb-16 w-full flex flex-col justify-center items-center gap-4 md:gap-8 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">OUR VALUES</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex justify-center items-center text-center mb-8 lg:mb-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl staatliches-regular uppercase font-bold">
                We live and stand by these principles
              </h1>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <h1
                className={`text-lg md:text-xl lg:text-2xl hover:text-black ${isHoveredOne ? "text-black" : "text-gray-500"}`}
                onMouseEnter={() => setIsHoveredOne(true)}
                onMouseLeave={() => setIsHoveredOne(false)}
              >
                {`[01]  We collaborate with people we'd enjoy spending time with outside of work. Laid-back atmosphere.`}
              </h1>

              <h1
                className={`text-lg md:text-xl lg:text-2xl hover:text-black ${isHoveredTwo ? "text-black" : "text-gray-500"}`}
                onMouseEnter={() => setIsHoveredTwo(true)}
                onMouseLeave={() => setIsHoveredTwo(false)}
              >
                {`[02]  We believe in mutual relationships. We see our clients as partners, not just customers.`}
              </h1>

              <h1
                className={`text-lg md:text-xl lg:text-2xl hover:text-black ${isHoveredThree ? "text-black" : "text-gray-500"}`}
                onMouseEnter={() => setIsHoveredThree(true)}
                onMouseLeave={() => setIsHoveredThree(false)}
              >
                {`[03]  Our love for what we do fuels our work. Passion guides every decision we make on projects.`}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mottos Section */}
      <div>
        <div>
          <h1 className="pt-24 text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-center">Our Mottos</h1>
        </div>
        <div>

        </div>
      </div>

      <div>
        <div>
          <h1 className="pt-24 text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-left pl-8">Our Process</h1>
        </div>
        {/* Horizontal Scrolling */}
        <Carousel />
      </div>
      <div>
        <Work />
      </div>
    </div>
  );
}

export default About;
