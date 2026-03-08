import { ChevronDown } from "lucide-react";
import React from "react";

const MobileAppMain = () => {
  return (
    <div
      className="h-[110vh] flex flex-col pt-50 bg-center"
      style={{ backgroundImage: 'url("/solutions/solutionsMainBG.svg")' }}
    >
      <h1 className="max-w-7xl mx-auto font-light text-6xl tracking-[2%] text-center bg-linear-to-r from-[#FDCA0F] to-[#E5E5E5] bg-clip-text text-transparent">
        Mobile Apps Users <br /> Love to Use
      </h1>
      <p className="max-w-7xl mx-auto text-center tracking-[5%] text-xl font-light py-10">
        Build powerful Android and iOS applications with Bee Glad’s mobile <br />
        platform — optimized for speed, usability, and reliability.
      </p>
      <div className="text-center flex justify-center pt-10">
        <button className="flex flex-col items-center space-y-1.5 ">
        Scroll <ChevronDown />{" "}
      </button>
      </div>
    </div>
  );
};

export default MobileAppMain;
