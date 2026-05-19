import React from "react";

const TrustAndClarity = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      desc: "We understand your goals, users, and challenges.",
    },
    {
      id: 2,
      title: "Design",
      desc: "UX-driven designs focused on clarity and usability.",
    },
    {
      id: 3,
      title: "Develop",
      desc: "Clean, scalable, and secure code using modern tech.",
    },
    {
      id: 4,
      title: "Deliver & Scale",
      desc: "Launch, optimize, and grow with confidence.",
    },
  ];

  return (
    <div className="pt-12 md:pt-16">
      <div className="bg-[url('/trust-and-clarity.svg')] bg-cover bg-center bg-no-repeat py-12 md:py-20 px-4 md:px-10 text-white relative">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 md:mb-3 text-center md:text-left">
          Build trust and clarity.
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-10 md:mb-20 text-center md:text-left">
          Our Simple, Proven Process
        </p>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">

          {/* 🔥 Desktop Line */}
          <div className="hidden md:block absolute top-7 left-0 right-0 border-t border-dashed border-gray-500" />

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center md:w-1/4 px-2"
              >
                {/* Hexagon */}
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <div className="w-full h-full bg-[#FEBC2F] clip-hexagon flex items-center justify-center text-black font-semibold text-sm sm:text-lg">
                    {step.id}
                  </div>
                </div>

                {/* Mobile Vertical Line */}
                <div className="md:hidden w-px h-10 border-l border-dashed border-gray-500" />

                {/* Title */}
                <h3 className="mt-4 md:mt-6 text-base sm:text-lg font-medium">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hexagon Shape */}
      <style>
        {`
          .clip-hexagon {
            clip-path: polygon(
              25% 6.7%,
              75% 6.7%,
              100% 50%,
              75% 93.3%,
              25% 93.3%,
              0% 50%
            );
          }
        `}
      </style>
    </div>
  );
};

export default TrustAndClarity;