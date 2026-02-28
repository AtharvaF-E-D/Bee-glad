"use client";
import React from "react";
import { Shield, FileText, Activity, Database } from "lucide-react";
import Image from "next/image";

const HealthChallenges = () => {
  const challenges = [
    {
      title: "Data security & compliance",
      icon: <Shield size={28} className="text-[#FDCA0F]" />,
    },
    {
      title: "Manual workflows",
      icon: <FileText size={28} className="text-[#FDCA0F]" />,
    },
    {
      title: "Patient engagement",
      icon: <Activity size={28} className="text-[#FDCA0F]" />,
    },
    {
      title: "System interoperability",
      icon: <Database size={28} className="text-[#FDCA0F]" />,
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[40px] font-light mb-20">Challenges</h2>

        {/* Wrapper with positioning context */}
        <div className="relative">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-20">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="border border-[#FDCA0F] rounded-3xl py-12 px-8 flex flex-col items-center justify-center text-center"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-lg font-light">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Center Hexagon */}
          <div
            className="hidden md:flex absolute top-1/2 left-1/2 
  -translate-x-1/2 rotate-90 -translate-y-1/2 z-20"
          >
            {/* Outer Hexagon (Border) */}
            <div
              className="relative w-20 h-20"
              style={{
                clipPath:
                  "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
              }}
            >
              {/* Border Layer */}
              <div className="absolute inset-0 bg-[#FDCA0F]" />

              {/* Inner Cut Layer */}
              <div
                className="absolute inset-0.5 bg-black flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
                }}
              >
                <Activity size={22} className="text-[#FDCA0F]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-20">
        <h2 className="text-2xl md:text-3xl font-light mb-8">
          How We Help?
        </h2>

        {/* Image Card */}
        <div className="relative rounded-3xl overflow-hidden group ">
          
          {/* Image */}
          <Image
            src="/telemedicine.jpg" // place image in public folder
            alt="Telemedicine"
            width={1400}
            height={700}
            className="w-full h-105 object-cover"
            priority
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t bg-gray-400" />

          {/* Center text */}
          <div className="absolute inset-0 flex items-end justify-center pb-12">
            <h3 className="text-xl md:text-2xl font-light tracking-wide">
              Telemedicine platforms
            </h3>
          </div>

          {/* Right arrow button */}
          <button className="absolute right-6 top-1/2 -translate-y-1/2 border border-yellow-400 text-yellow-400 px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
            →
          </button>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button className="relative px-8 py-3 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-40 rounded-lg -z-10"></div>
            
            Let's Build Together →
          </button>
        </div>

      </div>
    </section>
  );
};

export default HealthChallenges;
