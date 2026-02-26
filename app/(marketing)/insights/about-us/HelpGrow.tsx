import React from "react";

const HelpGrow = () => {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-20">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-light mb-16">
        How we can help grow
      </h2>

      {/* 3 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start max-w-7xl">

        {/* Left Side Menu */}
        <div className="space-y-6">
          <h3 className="text-4xl font-light relative w-fit">
            Product clarity
            <span className="absolute left-0 -bottom-2 w-10 h-px bg-white"></span>
          </h3>

          <ul className="space-y-4 text-gray-400 text-2xl font-light">
            <li>UX/UI design</li>
            <li>Development</li>
            <li>Maintain process</li>
          </ul>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[220px] overflow-hidden">
            <img
              src="/aboutus/helpGrow.svg"   // replace with your image path
              alt="wireframe sketch"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <p className="text-[26px] text-gray-300 leading-8 font-light">
            Are you at the idea stage? We will help you identify the
            critical MVP product scope.
          </p>

          <ul className="text-gray-400 space-y-2 text-[25px] font-light">
            <li>product goal&vision</li>
            <li>brand voice</li>
            <li>product positioning</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HelpGrow;