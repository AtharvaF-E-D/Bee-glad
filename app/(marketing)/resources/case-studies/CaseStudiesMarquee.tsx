import React from "react";
import Marquee from "react-fast-marquee";

const items1 = [
  "Product Strategy",
  "Web & Mobile Development",
  "Illustration",
  "Graphic Design",
  "Branding",
  "Motion Design",
];

const items2 = [
  "UI design",
  "UX design",
  "AI Integration",
  "Enterprise Systems",
  "Enterprise Software",
  "Digital Strategy",
];

const CaseStudiesMarquee = () => {
  return (
    <div className="py-14 text-white/50 space-y-8 overflow-hidden">
      
      <Marquee
        direction="right"
        speed={60}
        gradient={false}
        className="overflow-hidden"
      >
        {items1.map((item) => (
          <div
            className="flex items-center px-8 whitespace-nowrap py-4"
            key={item}
          >
            <span className="w-6 h-6 border border-amber-500 rotate-45 mr-6 inline-block shrink-0"></span>
            <p className="text-3xl font-light leading-none">{item}</p>
          </div>
        ))}
      </Marquee>

      <Marquee
        direction="left"
        speed={60}
        gradient={false}
        className="overflow-hidden"
      >
        {items2.map((item) => (
          <div
            className="flex items-center px-8 whitespace-nowrap py-4"
            key={item}
          >
            <span className="w-6 h-6 border border-amber-500 rotate-45 mr-6 inline-block shrink-0"></span>
            <p className="text-3xl font-light leading-none">{item}</p>
          </div>
        ))}
      </Marquee>

    </div>
  );
};

export default CaseStudiesMarquee;