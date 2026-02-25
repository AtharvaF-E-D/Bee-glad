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
    <section className="overflow-hidden py-20">
      {/* Heading */}
      <h1 className="text-5xl font-light text-center">
        Built on Proven & Modern Technologies
      </h1>

      {/* Description */}
      <p className="text-center text-[#737373] text-xl font-normal px-4 max-w-7xl mx-auto mt-6">
        We design and build digital products using reliable, scalable, and
        future-ready technologies — ensuring performance, security, and
        long-term growth.
      </p>

      {/* Marquee Rows */}
      <div className="mt-16 space-y-3">
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
        className="flex gap-3 w-max"
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
  <div className="w-76.25 h-27.5 py-7.25 px-32.25 rounded-[9px] bg-[#7E827F24] flex items-center justify-center">
    <Image
      src={image}
      alt="modern technology"
      width={60}
      height={60}
      className="object-contain"
    />
  </div>
);

export default MordernTechnologies;
