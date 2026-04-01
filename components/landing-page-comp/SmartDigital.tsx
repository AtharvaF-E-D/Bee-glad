/* eslint-disable @next/next/no-img-element */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { getSolutions } from "@/lib/appwrite/SmartSolutions";
import { useState, useEffect } from "react";

type Solution = {
  $id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string;
  illustration: string | null;
  imageId: string | null;
  order: number;
};

const SmartDigital = () => {
  const [solutions, setSolutions] = useState<Solution[]>([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      const data = await getSolutions();
      setSolutions(data);
    };
    fetchSolutions();
  }, []);

  return (
    <div className="px-4">
      {/* Heading */}
      <div className="pt-12 md:pt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-light text-center leading-snug">
          Smart Digital Solutions That Help <br className="hidden sm:block" />
          Your Business Grow
        </h1>
      </div>

      {/* Subheading */}
      <div className="pt-4 md:pt-8">
        <p className="text-center text-[#737373] text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
          From product engineering to scalable cloud solutions,
          Bee Glad helps you build, optimize, and scale digital experiences
          with confidence.
        </p>
      </div>

      {/* Tabs Section */}
      {solutions.length > 0 && (
        <div className="max-w-7xl mx-auto pt-10 md:pt-20">
          <Tabs defaultValue={solutions[0].$id} className="w-full">

            {/* Tabs List (Scrollable on mobile) */}
            <TabsList className="w-full flex overflow-x-auto no-scrollbar bg-transparent p-0">
              {solutions.map((tab) => (
                <TabsTrigger
                  key={tab.$id}
                  value={tab.$id}
                  className="
                    shrink-0 px-4 py-3 sm:py-4
                    text-sm sm:text-base md:text-lg
                    text-white/70 text-center
                    border-b-2 border-transparent
                    transition-all duration-300
                    hover:text-white
                    data-[state=active]:text-[#FEBC2F]
                    data-[state=active]:border-b-[#FEBC2F]
                    data-[state=active]:bg-transparent
                    data-[state=active]:rounded-none
                  "
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            <div className="py-6 md:p-8">
              {solutions.map((tab) => (
                <TabsContent key={tab.$id} value={tab.$id}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                    
                    {/* LEFT CONTENT */}
                    <div className="space-y-5 md:space-y-7">
                      <h1 className="text-lg sm:text-xl md:text-2xl font-light">
                        {tab.subtitle}
                      </h1>

                      <p className="text-sm sm:text-base text-[#737373]">
                        {tab.description}
                      </p>

                      {/* FEATURES */}
                      <ul className="space-y-2 md:space-y-3 text-[#E0C998] text-sm sm:text-base">
                        {(tab.features ?? "").split(",").map((item, index) => (
                          <li
                            key={index}
                            className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-[url('/list-icon.svg')] before:bg-contain before:bg-no-repeat"
                          >
                            {item.trim()}
                          </li>
                        ))}
                      </ul>

                      <Button className="text-base sm:text-lg font-light p-0 bg-transparent">
                        LEARN MORE →
                      </Button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">
                      {tab.illustration && (
                        <img
                          src={tab.illustration}
                          alt={tab.title}
                          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                        />
                      )}
                    </div>

                  </div>
                </TabsContent>
              ))}
            </div>

          </Tabs>
        </div>
      )}
    </div>
  );
};

export default SmartDigital;