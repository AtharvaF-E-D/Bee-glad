import React from "react";

const Card = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      {/* Yellow Background Layer */}
      <div className="absolute inset-0">
        <div className="absolute -left-1 top-0 h-full w-full bg-yellow-400 rounded-2xl"></div>
      </div>

      {/* Main Card */}
      <div className="relative bg-linear-to-br from-[#1f1f1f] to-[#2a2a2a]
                      border border-white/20
                      rounded-2xl
                      p-8
                      text-white">

        <h2 className="text-2xl font-light mb-4">{title}</h2>

        <div className="flex gap-3 mb-6">
          <span className="text-xs bg-white text-black px-3 py-1 rounded-md">
            Full-time
          </span>
          <span className="text-xs bg-white text-black px-3 py-1 rounded-md">
            Remote / Hybrid
          </span>
        </div>

        <p className="text-white/60 text-sm mb-2">
          Focus: Performance, UX, modern frameworks
        </p>
        <p className="text-white/60 text-sm mb-6">
          Experience: 2+ years
        </p>

        <button className="text-white font-light hover:underline">
          Apply Now
        </button>
      </div>
    </div>
  );
};

const OpenPositions = () => {
  return (
    <div className="bg-black py-24">
      <h1 className="font-light text-white text-5xl text-center mb-6">
        Open Positions
      </h1>

      <p className="text-white/50 text-xl font-normal text-center mb-16">
        Find your perfect role and join our growing team of Bee Glad
      </p>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <Card title="Frontend Developer" />
        <Card title="UI/UX Designer" />
        <Card title="Frontend Developer" />
        <Card title="UI/UX Designer" />
      </div>
    </div>
  );
};

export default OpenPositions;