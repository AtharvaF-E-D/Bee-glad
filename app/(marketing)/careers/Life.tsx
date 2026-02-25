import React from "react";
import Image from "next/image";

const Life = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-white text-5xl font-light text-center mb-16">
          Life at Bee-Glad
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8  items-end pr-8">
            {/* Top Image */}
            <div className="relative w-141.25 h-99.75 rounded-2xl overflow-hidden ">
              <Image
                src="/careers/life-1.png"
                alt="team"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Tall Image */}
            <div className="relative w-141.25 h-173.5 rounded-2xl overflow-hidden">
              <Image
                src="/careers/life-2.png"
                alt="office"
                fill
                className="object-cover"
              />
            </div>

            {/* Button */}
            <div className="w-full px-10">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-medium transition">
                Explore Gallery
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            {/* Top Image */}
            <div className="relative w-141.25 h-120.75 rounded-2xl overflow-hidden">
              <Image
                src="/careers/life-3.png"
                alt="team 2"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Two Images */}
            <div className="flex flex-col gap-8">
              <div className="relative w-141.25 h-84.5 rounded-2xl overflow-hidden">
                <Image
                  src="/careers/life-4.png"
                  alt="outdoor"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative w-141.25 h-92 rounded-2xl overflow-hidden">
                <Image
                  src="/careers/life-5.png"
                  alt="outdoor 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;