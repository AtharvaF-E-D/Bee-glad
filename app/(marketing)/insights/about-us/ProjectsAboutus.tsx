import React from "react";

const ProjectsAboutus = () => {
  return (
    <div className="px-10 py-40">
      <h1 className="text-5xl font-light pb-20">Projects</h1>

      {/* Outer 2-column grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* LEFT COLUMN: top big card + bottom row of 2 cards + caption */}
        <div className="flex flex-col gap-8">
          {/* Top green card */}
          <div className="w-full h-107.25 bg-[#00e68c]">
            <img
              src="/aboutus/aboutProject1.svg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom row: 2 cards side by side */}
          <div className="flex flex-row gap-8">
            <div className="flex-1 h-102.25 bg-[#10555c]">
              <img
                src="/aboutus/aboutProject2.svg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* <div className="flex-1 h-62.25 bg-teal-700"></div> */}
          </div>

          {/* Caption bar */}
          <div className="w-full h-full bg-white/10 flex flex-col justify-center px-6 gap-8">
            <p className="text-white text-2xl font-light">
              How we design Our products
            </p>
            <button className="w-28 bg-black text-white  py-2 px-4 rounded-full">
              See More
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: top tall card + bottom card */}
        <div className="flex flex-col gap-8">
          <div className="w-full h-169.25 bg-purple-200">
            <img
              src="/aboutus/aboutProject3.svg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full flex-1 bg-purple-900">
            <img
              src="/aboutus/aboutProject4.svg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsAboutus;
