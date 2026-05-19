/* eslint-disable @next/next/no-img-element */
import { ArrowUp } from "lucide-react";

const data = [
  {
    serialNo: "one",
    title: "Web Application Platform",
    desc: "Robust, scalable web systems built for performance and growth.",
    img: "/resources/img-1.png",
  },
  {
    serialNo: "two",
    title: "Mobile App Platform",
    desc: "Native and cross-platform mobile apps with seamless UX.",
    img: "/resources/img-2.png",
  },
  {
    serialNo: "three",
    title: "Cloud-Ready Architecture",
    desc: "Secure, scalable infrastructure designed for long-term reliability.",
    img: "/resources/img-3.png",
  },
  {
    serialNo: "four",
    title: "AI-Enabled Solutions",
    desc: "Smart automation, analytics, and AI-driven features that add real value.",
    img: "/resources/img-4.png",
  },
];

const PortfolioWhat = () => {
  return (
    <div className="">
      <h1 className="text-[180px] text-center font-[350]">WHAT WE DO</h1>
      <h2 className="text-5xl text-center font-[350] text-white/62 pb-20">
        Our Platforms & Services
      </h2>
      {data.map((item, index) => (
        <div
          key={index}
          className="grid gap-20 grid-cols-[420px_1fr] max-w-7xl mx-auto py-12"
        >
          <div>
            <p className="text-lg font-[350]py-3">{item.serialNo}</p>
            <p className="flex py-3">
              <span className="text-5xl font-[350]">
                {item.title}
              </span>
              <span>
                <ArrowUp className="rotate-45 text-white mr-2 mt-2" size={40} />
              </span>
            </p>
            <p className="text-lg font-light py-3">
              {item.desc}
            </p>
          </div>
          <div>
            <img src={item.img} alt="" className="rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioWhat;
