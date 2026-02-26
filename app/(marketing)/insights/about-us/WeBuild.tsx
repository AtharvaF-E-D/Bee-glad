import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const WeBuild = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#000000_0%,#1E1E1E_100%)] py-25 px-6 md:px-20 text-white">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[#9C9C9C] text-lg tracking-widest">
          WHAT WE DO
        </p>
        <h2 className="text-5xl  font-light mt-4">
          What We Build
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative">
          <img
            src="/your-image.jpg" // replace with your actual image path
            alt="team working"
            className="w-full h-95 object-cover rounded-sm"
          />

          {/* Optional dark overlay (like screenshot tone) */}
          <div className="absolute inset-0 bg-white/30 rounded-sm"></div>
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-[28px] font-light mb-6">
            Custom Software Engineering
          </h3>

          <p className="text-white font-light leading-relaxed mb-6 pr-60 text-xl">
            Robust, scalable software solutions designed for complex business
            needs and long-term success.
          </p>

          <p className="text-white font-light leading-relaxed mb-10 pr-55 text-xl">
            Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames.
            Blandit et purus mollis convallis malesuada egestas risus quam
            enim. Semper lorem rhoncus et felis tristique tellus volutpat orci.
            Duis elementum a sed.
          </p>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition">
              <ArrowLeft size={18} />
            </button>

            <button className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBuild;