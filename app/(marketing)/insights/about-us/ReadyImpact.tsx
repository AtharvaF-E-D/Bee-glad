import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const ReadyImpact = () => {
  return (
    <div className="grid grid-cols-[400px_1fr_400px] h-180 my-20">
      <div>
        <div className="">
            <img src="/aboutus/impactpg.png" alt="" className="w-90 h-147.5"/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-20">
        <h1 className="text-[55px] font-light text-center leading-14">
          Ready to Build Something Impactful?
        </h1>
        <p className="font-light text-[17px] text-center py-8">
          Let’s turn your idea into a powerful digital product <br /> — with clarity,
          speed, and confidence.
        </p>
        <Button
          className="relative w-54.25 h-13 px-7.5 py-3 rounded-[10px] text-black font-medium overflow-hidden  border border-white/40 bg-[linear-gradient(180deg,#F8D24E_0%,#FFC700_60%,#E6B800_100%)] shadow-[inset_0px_4px_12px_rgba(255,255,255,0.6),0px_4px_20px_rgba(255,199,0,0.4)]
                         transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
        >
          <span className="flex items-center  text-[16px] font-light gap-2">
            Let’s Build Together
            <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
      <div className="flex items-end justify-end">
        <img src="/aboutus/impactpg2.png" alt=""  className="w-90 h-147.5" />
      </div>
    </div>
  );
};

export default ReadyImpact;
