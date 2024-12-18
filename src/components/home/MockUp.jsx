import LetterPullup from "@/components/ui/letter-pullup";
import { LAPTOP_MOCKUP } from "@/utils/constants";
export default function MockUp() {
  return (
    <div className="w-full h-[500px] bg-[#d9d9d9] flex items-center">
      <div className="w-1/3">
        <img
        src={LAPTOP_MOCKUP}
        className="h-[400px] animate-slowBounce" alt="mockup"
      />
      </div>
      
      <div className="w-2/3 flex flex-col items-center">
      <LetterPullup className="text-black" words={"PREPARING YOUR WEBSITE FOR OPTIMAL"} delay={0.05} />
      <LetterPullup words={"USER ENGAGEMENT AND SUCCESS,"} delay={0.05} />
      <LetterPullup words={"SPECIALIZING IN WEBSITE CREATION."} delay={0.05} />
      </div>
    </div>
  );
}
