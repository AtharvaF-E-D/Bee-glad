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
    <div className="pt-16">
      <div className="bg-[url('/trust-and-clarity.svg')] bg-cover bg-center bg-no-repeat  py-20 px-10 text-white relative">
        
        <h1 className="text-5xl font-light mb-3">
          Build trust and clarity.
        </h1>
        <p className="text-gray-400 text-lg mb-20">
          Our Simple, Proven Process
        </p>

        <div className="relative">

          {/* 🔥 LINE ONLY BETWEEN STEP 1 & STEP 4 */}
          <div
            className="
              absolute 
              top-7 
              left-[10.5%] 
              w-[61%] 
              border-t 
              border-dashed 
              border-gray-500
            "
          />

          {/* Steps */}
          <div className="relative flex justify-between items-start w-[1200px]">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center w-1/4 px-4"
              >
                {/* Hexagon */}
                <div className="relative z-10 w-14 h-14 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#FEBC2F] clip-hexagon flex items-center justify-center text-black font-semibold text-lg">
                    {step.id}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-medium">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-400 max-w-xs">
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