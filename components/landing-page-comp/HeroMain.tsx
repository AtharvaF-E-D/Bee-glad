/* eslint-disable @next/next/no-img-element */
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const HeroMain = () => {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/HoneyCombBG.png')" }}
    >
      {/* HERO */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-transparent py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-clip-text bg-[linear-gradient(96.74deg,#FDCA0F_-22.81%,#E5E5E5_98.36%)] leading-snug">
            Build Digital Products <br className="hidden sm:block" />
            That Make Businesses Buzz
          </h1>

          <h2 className="text-sm sm:text-base md:text-lg text-[#737373] mt-2">
            We design, develop, and scale high-performance web & mobile
            solutions for modern businesses.
          </h2>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button className="w-full sm:w-auto px-6 py-3 rounded-[10px] text-black font-medium text-sm border border-white/40 bg-[linear-gradient(180deg,#F8D24E_0%,#FFC700_60%,#E6B800_100%)] shadow-[inset_0px_4px_12px_rgba(255,255,255,0.6),0px_4px_20px_rgba(255,199,0,0.4)] transition-all duration-300 hover:brightness-105 active:scale-[0.98]">
              <span className="flex items-center justify-center gap-2">
                Let’s Build Together
                <ChevronRight className="w-5 h-5" />
              </span>
            </Button>

            <Button className="w-full sm:w-auto px-6 py-3 border border-[#e7d895] rounded-[10px] text-[#ebc472] font-medium text-sm transition-all duration-300 hover:brightness-105 active:scale-[0.98]">
              <span className="flex items-center justify-center gap-2">
                View Our Work
                <ChevronRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-181 h-109.75 rounded-[9px] flex items-center justify-center">
            <div className="w-167.5 h-102  text-center">
              {/* <video src={"https://www.pexels.com/download/video/7534244/"} controls loop/> */}
              <img src="/thumbnail.png" alt="reload" />
            </div>
          </div>
        </div>
      </div>

      {/* TRUST TEXT */}
      <div className="bg-[#262626] px-4">
        <h1 className="text-center text-sm sm:text-base md:text-lg py-4 bg-clip-text text-transparent bg-[linear-gradient(90.81deg,#E5C553_-1.4%,rgba(255,255,255,0.17)_91.27%,rgba(242,226,169,0.585)_112.65%)]">
          Trusted by startups, enterprises & growing teams worldwide
        </h1>
      </div>

      {/* WHY SECTION */}
      <div className="pt-12 md:pt-20 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-light text-center">
          Why Clients Are Glad They Chose Bee Glad 🐝
        </h1>
      </div>

      <div className="pt-6 md:pt-8 px-4 pb-12">
        <p className="text-center text-[#737373] text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
          At Bee Glad, we believe great technology should feel effortless. We
          help businesses turn ideas into scalable digital products with clean
          code, thoughtful design, and reliable delivery.
        </p>
      </div>
    </section>
  );
};

export default HeroMain;