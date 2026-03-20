/* eslint-disable @next/next/no-img-element */

import {ArrowUp } from "lucide-react";

const PortfolioMain = () => {
  return (
    <div className="bg-[url('/resources/portfolio-header.png')] bg-cover bg-no-repeat bg-center h-[200vh]">
      <div className="py-10 flex flex-col items-center">
        <img src="/logo.svg" alt="" className="w-94.5" />
        <p className="py-10 text-white/70 text-xl tracking-wide">
          Digital innovation through strategy, design & engineering.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_240px] max-w-7xl mx-auto">
        <div className="max-w-lg">
          <h1 className="text-5xl font-light py-3">Who We Are</h1>
          <p className="text-xl font-light py-3">
            Bee Glad is a forward-looking technology company that designs and
            builds digital products with clarity, purpose, and performance. We
            partner with startups and enterprises to translate complex business
            needs into meaningful, scalable solutions using modern technology
            stacks and agile delivery principles
          </p>
          <p className="text-xl font-light py-3">What makes us different</p>
          <ul className="list-none text-white/68 font-light">
            <li className="flex">
              <ArrowUp className="rotate-45 text-[#FDCA0FD6] mr-2" />{" "}
              Product-first mindset
            </li>
            <li className="flex">
              <ArrowUp className="rotate-45 text-[#FDCA0FD6] mr-2" />
              Clean, scalable architecture
            </li>
            <li className="flex">
              <ArrowUp className="rotate-45 text-[#FDCA0FD6] mr-2" />
              Honest timelines & transparent delivery
            </li>
            <li className="flex">
              <ArrowUp className="rotate-45 text-[#FDCA0FD6] mr-2" />
              Design + engineering under one roof
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center px-6 space-y-10">
          <div>
            <h1 className="text-5xl font-[350] text-white">
              15 <span className="text-white">+</span>
            </h1>
            <p className="text-[#FDCA0F] text-2xl mt-1 font-[350]">Experts</p>
          </div>

          <div>
            <h1 className="text-5xl font-[350] text-white">
              200 <span className="text-white">+</span>
            </h1>
            <p className="text-[#FDCA0F] text-2xl mt-1 font-[350]">Projects</p>
          </div>

          <div>
            <h1 className="text-5xl font-[350] text-white">
              50 <span className="text-white">+</span>
            </h1>
            <p className="text-[#FDCA0F] text-2xl mt-1 font-[350]">Employees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;
