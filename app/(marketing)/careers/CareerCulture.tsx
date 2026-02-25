import Image from "next/image";
import React from "react";

const CareerCulture = () => {
  return (
    <div className="bg-black py-20">
      <h1 className="font-light text-white text-5xl text-center py-20">
        Our Culture
      </h1>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-5 gap-6">
          {/* First Row */}
          <div className="col-span-3 relative">
            <Image
              src="/careers/culture1.png"
              alt="culture1"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
            <p className="absolute bottom-0 px-12 pb-5 pt-10 text-2xl font-light bg-linear-to-t from-black to-transparent w-full">Ownership Mindset</p>
          </div>

          <div className="col-span-2 relative">
            <Image
              src="/careers/culture2.png"
              alt="culture2"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
             <p className="absolute bottom-0 px-12 pb-5 pt-10 text-2xl font-light bg-linear-to-t from-black to-transparent w-full">Learning-Driven</p>
          </div>

          {/* Second Row */}
          <div className="col-span-2 relative">
            <Image
              src="/careers/culture3.png"
              alt="culture3"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
             <p className="absolute bottom-0 px-12 pb-5 pt-10 text-2xl font-light bg-linear-to-t from-black to-transparent w-full">Collaborative Team</p>
          </div>

          <div className="col-span-3 relative">
            <Image
              src="/careers/culture4.png"
              alt="culture4"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
            />
             <p className="absolute bottom-0 px-12 pb-5 pt-10 text-2xl font-light bg-linear-to-t from-black to-transparent w-full">Quality Over Quantity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCulture;
