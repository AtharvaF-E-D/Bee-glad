import React from "react";
import {
  Laptop,
  HeartHandshake,
  ShieldPlus,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: <Laptop size={38} strokeWidth={1.5} />,
    title: "Flexible Work",
    desc: "Hybrid work options across our global offices",
  },
  {
    icon: <HeartHandshake size={38} strokeWidth={1.5} />,
    title: "Work-Life Balance",
    desc: "Balanced schedules that respect your personal time",
  },
  {
    icon: <ShieldPlus size={38} strokeWidth={1.5} />,
    title: "Health & Insurance",
    desc: "Comprehensive medical coverage for you and family",
  },
  {
    icon: <GraduationCap size={38} strokeWidth={1.5} />,
    title: "Learning & Development",
    desc: "Continuous learning opportunities and skill development",
  },
  {
    icon: <Laptop size={38} strokeWidth={1.5} />,
    title: "Flexible Work",
    desc: "Hybrid work options across our global offices",
  },
  {
    icon: <HeartHandshake size={38} strokeWidth={1.5} />,
    title: "Work-Life Balance",
    desc: "Balanced schedules that respect your personal time",
  },
  {
    icon: <ShieldPlus size={38} strokeWidth={1.5} />,
    title: "Health & Insurance",
    desc: "Comprehensive medical coverage for you and family",
  },
  {
    icon: <GraduationCap size={38} strokeWidth={1.5} />,
    title: "Learning & Development",
    desc: "Continuous learning opportunities and skill development",
  },
];

const BenefitsPerks = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-white text-5xl font-light text-center mb-20">
          Benefits & Perks
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-[#3a3a3a] border border-white/10 rounded-2xl p-8 
                         shadow-[0_8px_30px_rgba(0,0,0,0.6)] 
                         hover:border-yellow-400/40 transition duration-300"
            >
              <div className="text-white mb-6">{item.icon}</div>

              <h3 className="text-yellow-400 text-lg font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsPerks;
