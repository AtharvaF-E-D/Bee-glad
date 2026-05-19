"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  marqueeRow1,
  marqueeRow2,
  marqueeRow3,
} from "@/lib/landingpage";

type TechItem = {
  id: string;
  image: string;
};

const MordernTechnologies = () => {
  return (
    <section className="overflow-hidden py-12 md:py-20 px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center leading-snug">
        Built on Proven & Modern Technologies
      </h1>

      {/* Description */}
      <p className="text-center text-[#737373] text-sm sm:text-base md:text-lg max-w-4xl mx-auto mt-4 md:mt-6">
        We design and build digital products using reliable, scalable, and
        future-ready technologies — ensuring performance, security, and
        long-term growth.
      </p>

      {/* Marquee Rows */}
      <div className="mt-10 md:mt-16 space-y-4">
        <MarqueeRow direction="right" items={marqueeRow1} />
        <MarqueeRow direction="left" items={marqueeRow2} />
        <MarqueeRow direction="right" items={marqueeRow3} />
      </div>
    </section>
  );
};

const MarqueeRow = ({
  direction,
  items,
}: {
  direction: "left" | "right";
  items: TechItem[];
}) => {
  const xAnimation =
    direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 md:gap-6 w-max"
        animate={{ x: xAnimation }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <Card key={`${item.id}-${index}`} image={item.image} />
        ))}
      </motion.div>
    </div>
  );
};

const Card = ({ image }: { image: string }) => (
  <div className="shrink-0 rounded-[9px] bg-[#7E827F24] flex items-center justify-center
                  w-28 h-20 
                  sm:w-32 sm:h-24 
                  md:w-40 md:h-28 
                  lg:w-78 lg:h-34 
                  p-4">
    <Image
      src={image}
      alt="modern technology"
      width={60}
      height={60}
      className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
    />
  </div>
);

export default MordernTechnologies;