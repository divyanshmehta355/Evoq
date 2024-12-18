import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const cardsData = [
  {
    id: 1,
    pagination: "00 - 01",
    title: "Discovery",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/a9e376dea741b2e83a7e3be928012ee4.md.jpg",
    description:
      "We begin by understanding your business, your target audience, and your goals. This involves detailed discussions and research to lay the groundwork for the project.",
  },
  {
    id: 2,
    pagination: "00 - 02",
    title: "Planning",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/4e7d7d51fa5161f082dd9c9c23620837.jpg",
    description:
      "With our insights, we create a comprehensive project plan. This includes wireframes and prototypes to map out the structure and flow of your website or application.",
  },
  {
    id: 3,
    pagination: "00 - 03",
    title: "Design",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/cba70d29304b26b2db87306e691fea8a.md.jpg",
    description:
      "Our design team crafts visually striking and user-friendly interfaces. We ensure the design is both beautiful and intuitive, perfectly aligned with your brand.",
  },
  {
    id: 4,
    pagination: "00 - 04",
    title: "Development",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/40a872e572ac070483f524f96b2bcf4c.jpg",
    description:
      "Once the design is finalized, our developers bring it to life using the latest technologies, ensuring your site is fast, secure, and scalable.",
  },
  {
    id: 5,
    pagination: "00 - 05",
    title: "Testing",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/813b1b7dd074b0da86bb6b22406d19cd.jpg",
    description:
      "We perform rigorous testing to ensure everything functions flawlessly, including usability, performance testing, and resolving any issues.",
  },
  {
    id: 6,
    pagination: "00 - 06",
    title: "Launch",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/f10e3ee9af53281cbacbd991fb8d5b00.jpg",
    description:
      "After thorough testing and final approvals, we launch your website or application, ensuring a smooth transition and providing support for any post-launch issues.",
  },
  {
    id: 7,
    pagination: "00 - 07",
    title: "Support and Maintenance",
    image:
      "https://bg-so-1.zippyimage.com/2024/10/06/693efd5f6e05e6a7eb33f0454baf7478.jpg",
    description:
      "Our commitment does not end at launch. We offer ongoing support and maintenance to keep your site running smoothly and up-to-date.",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

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

  return (
    <div className="overflow-hidden p-4">
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
      </div>
    </div>
  );
};

export default Carousel;
