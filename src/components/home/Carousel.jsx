import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const cardsData = [
  {
    id: 1,
    pagination: "00 - 01",
    title: "Discovery",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/a9e376dea741b2e83a7e3be928012ee4.md.jpg",
    description: "",
  },
  {
    id: 2,
    pagination: "00 - 02",
    title: "Planning",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/4e7d7d51fa5161f082dd9c9c23620837.jpg",
    description: "",
  },
  {
    id: 3,
    pagination: "00 - 03",
    title: "Design",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/cba70d29304b26b2db87306e691fea8a.md.jpg",
    description: "",
  },
  {
    id: 4,
    pagination: "00 - 04",
    title: "Development",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/40a872e572ac070483f524f96b2bcf4c.jpg",
    description: "",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const router = useRouter(); // Hook for navigation

  const handleWheel = (event) => {
    event.preventDefault(); // Prevent scrolling the whole page
    const scrollAmount = event.deltaY > 0 ? 300 : -300; // Scroll distance

    if (carouselRef.current) {
      // Animate scroll with GSAP
      gsap.to(carouselRef.current, {
        scrollLeft: carouselRef.current.scrollLeft + scrollAmount,
        duration: 0.5,
      });
    }
  };

  // Ensure the wheel event is only applied to the carousel
  useEffect(() => {
    const handleScrollLock = (event) => {
      if (carouselRef.current && carouselRef.current.contains(event.target)) {
        // Allow the wheel event to trigger only on the carousel
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleScrollLock, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScrollLock);
    };
  }, [isScrolling]);

  useEffect(() => {
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Handle click event for the circle button
  const handleCircleClick = () => {
    router.push("/contact"); // Navigate to the Contact Us page
  };

  return (
    <div className="overflow-hidden p-4 relative bg-[#D9D9D9]">
      <p className="text-center text-5xl font-bold uppercase p-4">Our Work</p>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide"
        onWheel={handleWheel}
        onMouseUp={() => setIsScrolling(false)}
      >
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="m-2 p-4 max-w-[400px] flex-shrink-0 text-center"
            onMouseEnter={() => {
              gsap.to(`#card-${card.id} .image`, { scale: 1.1, duration: 0.3 });
            }}
            onMouseLeave={() => {
              gsap.to(`#card-${card.id} .image`, { scale: 1, duration: 0.3 });
            }}
          >
            <div className="flex justify-around items-center p-2">
              <h2 className="roboto-regular text-lg font-semibold">
                {card.title}
              </h2>
              <p>{card.pagination}</p>
            </div>

            <div id={`card-${card.id}`} className="image-container">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={300}
                className="image rounded-md mb-2 transition-transform"
              />
            </div>

            <p className="text-black">{card.description}</p>
          </div>
        ))}

        <div className="flex items-center justify-center">
          {/* Circle Button for "Want to get featured" as the last item */}
          <div
            className="m-2 p-4 border-2 border-black rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out bg-transparent text-black hover:bg-[#00A8CC] hover:text-white ml-auto relative"
            onClick={handleCircleClick}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on hover
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
            style={{
              width: "300px", // Set a fixed width
              height: "300px", // Set a fixed height equal to width to ensure it's round
              borderRadius: "50%", // Ensure it has a circular border radius
              padding: 0, // Remove padding to maintain circle shape
            }}
          >
            <div className="text-center">
              <p
                className={`text-4xl text-center font-bold transition-all duration-500 ease-in-out ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                Want to get
              </p>
              <p
                className={`text-4xl text-center font-bold transition-all duration-500 ease-in-out ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                featured?
              </p>

              {/* The "CONTACT US" text */}
              <p
                className={`text-4xl text-center underline font-bold transition-all duration-500 ease-in-out ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                CONTACT US
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
