"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, Dot } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const CareersMain = () => {
  const image = [
    "company-logo/Boligmatch.svg",
    "company-logo/hobbyhub.svg",
    "company-logo/instron.svg",
    "company-logo/ioweb3.svg",
    "company-logo/sugaroff.svg",
  ];

  const duplicatedImages = [...image, ...image];

  return (
    <div className="bg-[url('/careers/CareersMain.svg')] bg-cover bg-center h-[150vh] flex flex-col items-center pt-40 pb-20">
      {/* Content Section */}
      <div className="text-center flex flex-col items-center space-y-6 max-w-3xl px-6">
        {/* Top Small Button */}
        <div className="px-6 h-9 py-2 border border-white/20 rounded-full text-sm flex items-center backdrop-blur-md bg-white/5">
          <Dot />
          <span className="bg-[linear-gradient(90deg,#919191_8.68%,#FFFFFF_23.34%,#FFFFFF_30.29%,#919191_38.33%)] bg-clip-text text-transparent">
            Careers at Bee Glad
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight">
          <span className="bg-linear-to-r from-[#FDCA0F] to-[#E5E5E5] bg-clip-text text-transparent">
            Build What Matters.
          </span>
          <br />
          <span className="bg-linear-to-r from-[#FDCA0F] to-[#E5E5E5] bg-clip-text text-transparent">
            Grow With Us.
          </span>
        </h1>

        {/* Paragraph */}
        <p className="text-white/50 text-lg md:text-xl leading-relaxed font-normal">
          At Bee-Glad, we’re building digital products that solve real problems.
          Join a team that values curiosity, ownership, and meaningful impact.
        </p>

        {/* CTA Button */}
        <Button
          className="group mt-4 border border-[#E7C873] text-[#E7C873] bg-transparent
          hover:bg-[#E7C873]/10 px-8 py-6 rounded-lg transition-all duration-300"
        >
          <span className="flex items-center gap-2 text-base">
            View Open Positions
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </div>

      {/* Logos Section */}
      <div className="relative max-w-6xl overflow-hidden py-10 pt-35">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // ⬅ control speed here
            ease: "linear",
          }}
        >
          {duplicatedImages.map((logo, index) => (
            <div key={index} className="relative w-40 h-16 shrink-0">
              <Image
                src={`/${logo}`}
                alt={`company-logo-${index}`}
                fill
                className="object-contain w-50 h-20  transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CareersMain;