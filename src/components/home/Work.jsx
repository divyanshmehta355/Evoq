import React from "react";
import Image from "next/image";

const Work = () => {
  const photos = [
    "https://bg-so-1.zippyimage.com/2024/10/18/c54fbac39496a4053b4b2145ce264d2b.png",
    "https://bg-so-1.zippyimage.com/2024/10/18/01632c6ceaac56333a1e05f2247e538a.jpg",
    "https://bg-so-1.zippyimage.com/2024/10/18/6124e4560adcbb85b664e3ec6d12da78.jpg",
    "https://bg-so-1.zippyimage.com/2024/10/18/04adeb5a3331f596f67fb31ecc36706e.jpg",
  ];

  return (
    <div className="w-full h-auto bg-[#d9d9d9] flex flex-col">
      <div className="flex justify-center items-center pt-6">
        <h1 className="text-6xl text-black font-bold">LET&apos;S WORK TOGETHER</h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center p-4">
        <div className="w-full lg:w-1/4 flex items-center justify-center">
          <p className="text-center lg:text-left px-4">
            Ready to take your digital presence to the next level? Contact us to
            discuss your project and learn how we can help you achieve your
            goals.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[400px]">
          {photos.map((src, index) => (
            <div
              key={index}
              className={`absolute w-[150px] h-[200px] overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 
                ${index === 0 ? "rotate-[0deg] z-40" : ""}
                ${index === 1 ? "rotate-[-25deg]  z-30" : ""}
                ${index === 2 ? "rotate-[-45deg]  z-20" : ""}
                ${index === 3 ? "rotate-[60deg] z-10" : ""}`}
            >
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                width={150}
                height={250}
                className="rounded-lg object-fill"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
