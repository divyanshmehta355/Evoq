import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { SVG_BG_IMAGE, WHO_WE_ARE_IMAGE } from "@/utils/constants";

export default function Who() {
  return (
    <div>
      <div className="relative h-[600px] w-full bg-[#d9d9d9]">
        <img src={SVG_BG_IMAGE} alt="" className="h-80 w-full object-cover" />
        <h1 className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold mibold leading-none text-transparent dark:from-white dark:to-slate-900/10 hero-gradient-text">
          WHO WE ARE
        </h1>
        <div>
          <div className="w-1/3 absolute bottom-12 left-16">
            <p className="text-xl font-semibold">
              We are a team of passionate UI/UX designers and web developers who
              believe in the power of digital transformation. Our mission is to
              help businesses thrive online by creating user-centric and
              visually appealing websites and applications. We bring creativity,
              technical expertise, and a commitment to excellence to every
              project.
            </p>
          </div>
          <div className="absolute top-1/4 right-32 rounded-lg">
            <img
              src={WHO_WE_ARE_IMAGE}
              alt=""
              className="rounded-3xl h-96 w-96"
            />
          </div>
        </div>
      </div>

      <hr className="border-t border-black" />
      <VelocityScroll
        text="UI/UX DESIGN ● WEB DEVELOPMENT ● CONTENT CREATION ●"
        default_velocity={5}
        className="bg-[#d9d9d9] font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-black md:text-6xl md:leading-[5rem]"
      />
      <hr className="border-t border-black" />
    </div>
  );
}
