"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  marqueeRow4
} from "@/lib/landingpage";

type TechItem = {
  id: string;
  image: string;
};

const MarqueeComp = () => {
  return (
    <section className="overflow-hidden py-10">
      {/* Marquee Rows */}
      <div className="mt-16 space-y-3">
        <MarqueeRow direction="right" items={marqueeRow4} />
        <MarqueeRow direction="left" items={marqueeRow4} />
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
  <div className="w-76.25 h-27.5 py-7.25 px-25.25 rounded-[9px] bg-[#7E827F24] flex items-center justify-center">
    <Image
      src={image}
      alt="modern technology"
      width={150}
      height={120}
      className="object-contain"
    />
  </div>
);

export default MarqueeComp;
