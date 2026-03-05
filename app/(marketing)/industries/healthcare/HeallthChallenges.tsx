/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Activity, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HealthChallenges = () => {
  const challenges = [
    {
      title: "Data security & compliance",
      image: "/industries/analytics.gif",
    },
    {
      title: "Manual workflows",
      image: "/industries/workflow.gif",
    },
    {
      title: "Patient engagement",
      image: "/industries/search-graph.gif",
    },
    {
      title: "System interoperability",
      image: "/industries/system.gif",
    },
  ];

  return (
    <section className="bg-black text-white py-24 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[40px] font-light mb-20">Challenges</h2>

        {/* Wrapper with positioning context */}
        <div className="relative">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-20">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="border border-[#FDCA0F] rounded-3xl py-12 px-8 flex flex-col items-center justify-center text-center"
              >
                <div className="mb-4">
                  <img src={item.image} className="w-15" alt="" />
                </div>
                <p className="text-lg font-light">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Center Hexagon */}
          <div
            className="hidden md:flex absolute top-1/2 left-1/2 
  -translate-x-1/2 rotate-90 -translate-y-1/2 z-20"
          >
            {/* Outer Hexagon (Border) */}
            <div
              className="relative w-15 h-15"
              style={{
                clipPath:
                  "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
              }}
            >
              {/* Border Layer */}
              <div className="absolute inset-0 bg-[#FDCA0F]" />

              {/* Inner Cut Layer */}
              <div
                className="absolute inset-0.5 bg-black flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
                }}
              >
                <img
                  src="/industries/bee-white.gif"
                  className="w-15 rotate-270"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-2xl md:text-3xl font-light mb-8">How We Help?</h2>

        {/* Image Card */}
        <div className="relative  overflow-visible group ">
          {/* Image */}
          <Image
            src="/industries/telemedicine.jpg" // place image in public folder
            alt="Telemedicine"
            width={1400}
            height={700}
            className="w-full h-105 object-cover rounded-3xl"
            priority
          />

          {/* Center text */}
          <div className="absolute inset-0 flex items-end justify-center pb-12">
            <h3 className="text-xl md:text-2xl font-light tracking-wide">
              Telemedicine platforms
            </h3>
          </div>

          {/* Right arrow button */}
          <button
            className="absolute -right-8 top-1/2 -translate-y-1/2 
  w-16 h-16 group transition duration-300 hover:scale-110 z-999"
          >
            <div
              className="relative w-full h-full rotate-90"
              style={{
                clipPath:
                  "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
              }}
            >
              {/* Border Layer */}
              <div className="absolute inset-0 bg-yellow-400 rotate-90 " />

              {/* Inner Cut Layer */}
              <div
                className="absolute inset-0.5  bg-black flex  items-center justify-center"
                style={{
                  clipPath:
                    "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
                }}
              >
                <img
                  src="/industries/bee-white.gif"
                  className="w-8  group-hover:rotate-0 transition duration-300"
                  alt="bee"
                />
              </div>
            </div>
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button
            className="relative bg-[linear-gradient(180deg,#F8D24E_0%,#FFC700_60%,#E6B800_100%)] text-black px-8 py-3 rounded-lg group mt-4 border border-[#f8edcd]
          hover:bg-[#E7C873]/10  transition-all duration-300"
          >
            {/* Glow */}
            Let&apos;s Build Together →
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="rounded-3xl bg-[url('/industries/reliable.jpg')]  bg-size-[195%]">
          <div className="px-10 py-16 md:px-16 md:py-20">
            {/* Heading Section */}
            <div className=" mx-auto mb-30">
              <h1 className="text-3xl md:text-[40px] font-light text-center mx-auto text-white leading-tight">
                Reliable. Secure. Built to Grow With You
              </h1>

              <p className="text-white mt-4 text-sm md:text-base text-center">
                Technology that scales quietly, performs consistently, and
                supports your growth at every stage.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div
                className="backdrop-blur-xs bg-white/10 border border-[#FBE8AF57] 
          rounded-3xl p-10 text-white"
              >
                <h3 className="text-lg font-medium mb-3">Millions+ Requests</h3>
                <p className="text-sm text-white">
                  We build platforms that handle real-world traffic — from
                  startups scaling fast to enterprises operating 24/7.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="backdrop-blur-md bg-white/10 border border-[#FBE8AF57] 
          rounded-3xl p-6 text-white"
              >
                <h3 className="text-lg font-medium mb-3">
                  98%+ Client Retention
                </h3>
                <p className="text-sm text-white">
                  Our clients stay because we deliver clean architecture,
                  predictable timelines, and dependable support.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="backdrop-blur-md bg-white/10 border border-[#FBE8AF57] 
          rounded-3xl p-6 text-white"
              >
                <h3 className="text-lg font-medium mb-3">99.9% Uptime</h3>
                <p className="text-sm text-white">
                  Cloud-ready, monitored, and performance-optimized systems that
                  businesses rely on daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url('/industries/white-hexa-bg.png')" }}
        className="mx-auto py-40 px-6 bg-repeat max-w-7xl flex flex-col"
      >
        <h1 className="text-center text-2xl md:text-4xl font-light leading-relaxed mb-15">
          You’ve seen what great technology can do. <br /> Now imagine what{" "}
          <img
            src="/logo.svg"
            alt="BeeGlad"
            className="inline-block w-30 mx-2 align-middle"
          />
          can build for you.
        </h1>
        <div className="flex items-center max-w-7xl mx-auto">
          {/* Avatar 1 */}
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            alt=""
            className="w-15 h-15 rounded-full object-cover border border-[#1a1a1a]"
          />

          {/* Avatar 2 */}
          <img
            src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
            alt=""
            className="w-15 h-15 rounded-full object-cover border border-[#1a1a1a] -ml-6"
          />

          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
            alt=""
            className="w-15 h-15 rounded-full object-cover border border-[#1a1a1a] -ml-6"
          />

          {/* +1 Badge */}
          <div
            className="w-10 h-10 rounded-full bg-gray-200 
    flex items-center justify-center 
    text-3xl font-light text-gray-600 
    border border-[#1a1a1a] -ml-3"
          >
            +1
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            className="group mt-4 border border-[#E7C873] text-[#E7C873] bg-transparent
          hover:bg-[#E7C873]/10 px-8 py-6 rounded-lg transition-all duration-300"
          >
            <span className="flex items-center gap-2 text-base">
              See What Clients Say
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealthChallenges;
