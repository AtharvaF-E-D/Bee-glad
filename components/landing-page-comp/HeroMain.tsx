import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const HeroMain = () => {
  return (
    <section
      className=" w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/HoneyCombBG.png')" }}
    >
      <div className="h-screen mx-auto max-w-360 grid grid-cols-[640px_1fr] place-items-center">
        <div className="w-full">
          <h1 className="text-transparent px-6 py-4  text-4xl font-light bg-clip-text bg-[linear-gradient(96.74deg,#FDCA0F_-22.81%,#E5E5E5_98.36%)]">
            Build Digital Products <br /> That Make Businesses Buzz
          </h1>
          <h2 className="font-normal px-6 text-xl text-[#737373]">
            We design, develop, and scale high-performance web & mobile
            solutions for modern businesses.
          </h2>
          <div className="px-6 py-15 flex space-x-2.5">
            <Button
              className="relative w-54.25 h-13 px-7.5 py-3 rounded-[10px] text-black font-medium overflow-hidden text-sm border border-white/40 bg-[linear-gradient(180deg,#F8D24E_0%,#FFC700_60%,#E6B800_100%)] shadow-[inset_0px_4px_12px_rgba(255,255,255,0.6),0px_4px_20px_rgba(255,199,0,0.4)]
                         transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                Let’s Build Together
                <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
            <Button
              className="relative w-54.25 h-13 border border-[#e7d895] rounded-[10px] px-7.5 py-3 text-[#ebc472] font-medium text-sm
             transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                View Our Work
                <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-181 h-109.75 bg-[#7E827F24] rounded-[9px] flex items-center justify-center">
            <div className="w-167.5 h-94.5 bg-[#C3C3C3] text-center">
              <video src={"https://www.pexels.com/download/video/7534244/"} controls loop/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#262626]">
        <h1 className="text-center text-xl py-4 bg-clip-text text-transparent bg-[linear-gradient(90.81deg,#E5C553_-1.4%,rgba(255,255,255,0.17)_91.27%,rgba(242,226,169,0.585)_112.65%)]">
          Trusted by startups, enterprises & growing teams worldwide
        </h1>
      </div>
      <div className="pt-20">
        <h1 className="text-[48px] font-light text-center">Why Clients Are Glad They Chose Bee Glad 🐝</h1>
      </div>
      <div className="pt-8">
        <p className="text-center text-[#737373] text-xl font-normal px-4 max-w-7xl mx-auto">At Bee Glad, we believe great technology should feel effortless. We help businesses turn <br /> ideas into scalable digital products with clean code, thoughtful design, and reliable delivery.</p>
      </div>
    </section>
  );
};

export default HeroMain;
