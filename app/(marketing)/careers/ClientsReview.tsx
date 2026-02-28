import React from "react";
import { Star, Quote } from "lucide-react";

const ClientsReview = () => {
  

  return (
    <section
      style={{
        backgroundImage: "url('/careers/careermain2bg.svg')",
      }}
      className="relative bg-[#0d0d0d] py-24 bg-cover bg-center px-6 h-[150vh] flex flex-col items-center overflow-hidden"
    >
      {/* Title */}
      <h1 className="text-white text-4xl md:text-5xl font-light text-center">
        What Our Clients Say
      </h1>

      <div className="w-36 h-1 bg-yellow-400 rounded-full mt-4 mb-16" />

      {/* Cards */}
      <div className="flex flex-wrap items-center h-full justify-center gap-5 max-w-350 w-full">
        {[1, 2, 3].map((item) => (
          <div key={item} className="perspective-distant relative">
             <div
                className="absolute left-1.75 top-15 w-20 h-20 bg-yellow-400 
              clip-path-hexagon flex items-center justify-center
              shadow-[0_4px_16px_rgba(253,202,15,0.45)] z-999"
              >
                <span className="text-white text-xl font-extrabold rotate-180 -mt-1">
                  <Quote fill="white" />
                </span>
              </div>
            <div
              className="relative w-102.75 h-95 rounded-[36px] flex flex-col items-center justify-center border border-white
            bg-linear-to-b from-white/40 to-[#1e1c16]/80 
            backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.55)]
            p-8 pt-10 text-white transform-[rotateY(-32deg)_rotateX(0deg)]"
            >             

              {/* Header */}
              <div className="pl-10">
                <h3 className="text-2xl font-bold">{"Client Name"}</h3>
                <p className="text-xs text-white/50 mt-1 text-center">
                  {"loremipsumtext"}
                </p>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-4 mb-6 pl-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xl font-normal text-white/80 leading-7 text-center">
                {
                  "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim."
                }
              </p>

              {/* Bottom Quote */}
              <div className="absolute bottom-5 right-6 scale-x-[-1] rotate-180 select-none">
                <Quote size={40} className="text-gray-500 border-0" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
        .clip-path-hexagon {
  clip-path: polygon(
    50% 0%,
    95% 25%,
    95% 75%,
    50% 100%,
    5% 75%,
    5% 25%
  );
}
        `}
      </style>
    </section>
  );
};

export default ClientsReview;
