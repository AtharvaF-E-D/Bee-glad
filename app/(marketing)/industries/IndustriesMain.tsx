import { Button } from "@/components/ui/button";
import { CircleArrowDown } from "lucide-react";
import React from "react";

const IndustriesMain = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center pt-40">
      <h1 className="max-w-7xl font-light text-5xl text-center bg-linear-to-r from-[#FDCA0F] to-[#E5E5E5] bg-clip-text text-transparent">
        We Serve Technology-Driven <br /> Industries
      </h1>
      <p className="max-w-7xl text-center text-xl py-10 tracking-[2%]">
        Bee Glad builds robust digital solutions tailored to diverse industry
        needs — from <br /> consumer apps to enterprise systems. Our platform
        and expertise empower businesses <br /> with scalable, secure, and
        future-ready technology.
      </p>
      <div className="py-12">
        <button>
          <CircleArrowDown size={34} strokeWidth={0.75} />{" "}
        </button>
      </div>
      <div className="px-10 w-full flex justify-between">
        <Button className="py-6 px-8 border text-lg font-light border-amber-400 rounded-full">
          Explore Work
        </Button>
        <Button className="py-6 px-8 border text-lg font-light border-amber-400 rounded-full">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default IndustriesMain;
