/* eslint-disable @next/next/no-img-element */
import { ArrowDown } from "lucide-react";
import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "Boligmatch",
    image: "/casestudy/CaseStudy1.png",
    tags: ["Web Application", "Mobile App"],
    offset: false,
  },
  {
    id: 2,
    title: "io-ai",
    image: "/casestudy/CaseStudy4.png",
    tags: ["Identité"],
    offset: true,
  },
  {
    id: 3,
    title: "Webisland 2022",
    image: "/casestudy/CaseStudy3.png",
    tags: ["Identité", "Webdesign"],
    offset: false,
  },
  {
    id: 4,
    title: "Launchr",
    image: "/casestudy/CaseStudy2.png",
    tags: ["Identité"],
    offset: true,
  },
];

const CaseWork = () => {
  return (
    <div className="py-10">
      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-[#0F0F12] py-2 px-4 text-xl font-light flex items-center gap-2">
          Learn How we Work
          <img src="/aboutus/bee.gif" alt="" width={30} />
        </button>
      </div>

      <div className="px-15 py-10">
        <h1 className="text-lg font-light py-10">
          Great technology isn’t just built — it’s thoughtfully crafted.
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-y-20 justify-items-center">
          {caseStudies.map((item, index) => (
            <div
              key={item.id}
              className={`py-6 px-15 relative ${
                item.offset ? "translate-y-20" : ""
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="rounded-[40px] w-full"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-9 left-0 w-full px-22 text-white">
                <h1 className="text-3xl font-light leading-loose">
                  {item.title}
                </h1>

                <div className="flex justify-between items-center">
                  {/* Tags */}
                  <div className="space-x-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="border border-white rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="text-black bg-white p-2 px-3 rounded-2xl">
                    <ArrowDown className="-rotate-40" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-20">
        <button className="bg-[#FDCA0F] text-black p-2 px-3 rounded-xl">View All Case Studies</button>
      </div>
    </div>
  );
};

export default CaseWork;
