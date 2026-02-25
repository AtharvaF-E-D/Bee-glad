import Image from "next/image";
import React from "react";

const WhyBeeGlad = () => {
  return (
    <div className="bg-[#000000]">
      <div className="py-25  max-w-325 mx-auto flex justify-center items-center">
        <div className=" space-y-3.5 px-20">
          <h1 className="text-5xl font-light">
            <span className="bg-linear-to-r from-[#FDCA0F] to-[#E5E5E5] bg-clip-text text-transparent">
              Why Bee-Glad?
            </span>
          </h1>
          <p className="text-xl text-[#FFFFFF] font-light">
            We’re not just another IT company. Bee-Glad is a place where ideas
            are heard, skills are sharpened, and people grow fast.
          </p>
          <p className="text-xl text-[#FFFFFF] font-light">
            We work with startups and enterprises across industries, giving you
            exposure to real-world challenges, modern technologies, and
            end-to-end product building — not just tasks.
          </p>
        </div>
        <div>
          <div className="max-w-7xl mx-auto">
            <section className="flex justify-center items-center">
              <div className="flex items-end gap-4 relative">
                {/* Left Card */}
                <div className="relative w-55 h-85 rounded-xl overflow-hidden shadow-2xl shadow-white/40">
                  <Image
                    src="/careers/whybee1.jpeg"
                    alt="Left"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Middle Card (shifted UP) */}
                <div className="relative w-55 h-85 rounded-xl overflow-hidden shadow-2xl shadow-white/40 -translate-y-17">
                  <Image
                    src="/careers/whybee2.jpeg"
                    alt="Center"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Card */}
                <div className="relative w-55 h-85 rounded-xl overflow-hidden shadow-white/40 shadow-2xl">
                  <Image
                    src="/careers/whybee3.jpeg"
                    alt="Right"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBeeGlad;
