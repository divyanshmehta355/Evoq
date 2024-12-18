"use client";
import React, { useState } from "react";
import { GradualSpacing } from "@/components/magicui/gradual-spacing";
import Work from "@/components/services/Work";

interface ServiceItem {
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    title: "Expertise",
    description:
      "Our team has extensive experience in web development, design, and content creation, ensuring top-notch results.",
  },
  {
    title: "Customization",
    description:
      "We tailor our services to meet your unique needs, whether it's a complex web application or a simple blog.",
  },
  {
    title: "Support",
    description:
      "We offer ongoing support and maintenance to keep your site running smoothly and efficiently.",
  },
  {
    title: "Transparency",
    description:
      "We maintain clear communication throughout the project, ensuring you're always informed and involved.",
  },
];

const Service: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredItem(index);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black h-36 w-full flex justify-center items-center">
        <GradualSpacing
          className="staatliches-regular pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none text-transparent dark:from-white dark:to-slate-900/10 hero-gradient-text"
          text="OUR SERVICES"
        />
      </div>
      <div className="w-full flex justify-end bg-black">
        <h3 className="text-white p-2 text-sm md:text-base lg:text-lg">
          INDIA
        </h3>
      </div>
      <hr className="border-t border-gray-300" />

      {/* Wave SVG and Values Section */}
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#045769"
              d="M0,192L60,160C120,128,240,64,360,42.7C480,21,600,43,720,58.7C840,75,960,85,1080,106.7C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>
        <div className="pb-16 w-full flex flex-col justify-center items-center gap-4 md:gap-8 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center">
            Why Choose Us?
          </h1>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-1/2 flex justify-center items-center text-center mb-8 lg:mb-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl staatliches-regular uppercase font-bold">
                Our Commitment to Excellence
              </h1>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`text-lg md:text-xl lg:text-2xl transition-colors duration-300 hover:text-black ${
                    hoveredItem === index ? "text-black" : "text-gray-500"
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col">
                    <div className="flex gap-4">
                      <h1>{`[0${index + 1}]`}</h1>
                      <h1>{service.title}</h1>
                    </div>
                    <div>
                      <h1 className="pl-14">{service.description}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="bg-[#d9d9d9] p-12">
        <div className="flex flex-col">
          <div className="">
            <h1 className="uppercase staatliches-regular font-extrabold text-5xl">
              Comprehensive Solutions
            </h1>
            <h1 className="uppercase staatliches-regular text-5xl">
              for Your Digital Needs
            </h1>
          </div>
        </div>
        <div>
          {/* Card 1 */}
          <div className="flex pt-12">
            <div className="flex flex-col gap-8 w-1/2">
              <h1 className="staatliches-regular text-4xl font-blod">
                UI/UX Design
              </h1>
              <p className="roboto-bold text-lg">
                We are a team of passionate UI/UX designers and web developers
                who believe in the power of digital transformation. Our mission
                is to help businesses thrive online by creating user-centric and
                visually appealing websites. We bring creativity, technical
                expertise, and a commitment to excellence to every project.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img
                src="https://bg-so-1.zippyimage.com/2024/10/17/293fb7f429e35cdc1514718a2a7600a6.md.png"
                className="rounded-lg h-[400px] h-[400px]"
                alt="card"
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex pt-12">
            <div className="w-1/2 flex items-center justify-center">
              <img
                src="https://bg-so-1.zippyimage.com/2024/10/17/293fb7f429e35cdc1514718a2a7600a6.md.png"
                className="rounded-lg h-[400px] h-[400px]"
                alt="card"
              />
            </div>
            <div className="flex flex-col gap-8 w-1/2">
              <h1 className="staatliches-regular text-4xl font-blod">
                UI/UX Design
              </h1>
              <p className="roboto-bold text-lg">
                We are a team of passionate UI/UX designers and web developers
                who believe in the power of digital transformation. Our mission
                is to help businesses thrive online by creating user-centric and
                visually appealing websites. We bring creativity, technical
                expertise, and a commitment to excellence to every project.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex pt-12">
            <div className="flex flex-col gap-8 w-1/2">
              <h1 className="staatliches-regular text-4xl font-blod">
                UI/UX Design
              </h1>
              <p className="roboto-bold text-lg">
                We are a team of passionate UI/UX designers and web developers
                who believe in the power of digital transformation. Our mission
                is to help businesses thrive online by creating user-centric and
                visually appealing websites. We bring creativity, technical
                expertise, and a commitment to excellence to every project.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img
                src="https://bg-so-1.zippyimage.com/2024/10/17/293fb7f429e35cdc1514718a2a7600a6.md.png"
                className="rounded-lg h-[400px] h-[400px]"
                alt="card"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Work Together */}
      <div>
        <Work />
      </div>
    </div>
  );
};

export default Service;
