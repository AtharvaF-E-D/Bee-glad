"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Image from "next/image";
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
    <div>
      {/* Heading */}
      <div className="pt-20">
        <h1 className="text-[48px] font-light text-center">
          Smart Digital Solutions That Help <br /> Your Business Grow
        </h1>
      </div>

      {/* Subheading */}
      <div className="pt-8">
        <p className="text-center text-[#737373] text-xl font-normal px-4 max-w-7xl mx-auto">
          From product engineering to scalable cloud solutions, <br />
          Bee Glad helps you build, optimize, and scale digital experiences with
          confidence.
        </p>
      </div>

      {/* Tabs Section */}
      {solutions.length > 0 && (
        <div className="max-w-7xl mx-auto pt-20">
          <Tabs defaultValue={solutions[0].$id} className="w-full">

            <TabsList className="w-full flex bg-transparent p-0">
              {solutions.map((tab) => (
                <TabsTrigger
                  key={tab.$id}
                  value={tab.$id}
                  className="
                                        flex-1 text-center py-5 pb-10
                                        text-white/70
                                        text-xl font-normal
                                        border-b-3 border-transparent
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

            {/* Dynamic Tab Content */}
            <div className="p-8">
              {solutions.map((tab) => (
                <TabsContent
                  key={tab.$id}
                  value={tab.$id}
                  className="text-white"
                >
                  <div className="grid grid-cols-2 gap-10 items-center">
                    <div className="space-y-9">
                      <h1 className="text-2xl font-light">{tab.subtitle}</h1>
                      <p className="text-[16px] font-normal text-[#737373]">
                        {tab.description}
                      </p>

                      <ul className="space-y-3 my-4 text-[#E0C998] text-[16px] font-normal">
                        {(tab.features ?? "").split(",").map((item, index) => (
                          <li
                            key={index}
                            className="relative pl-7 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-[url('/list-icon.svg')] before:bg-contain before:bg-no-repeat"
                          >
                            {item.trim()}
                          </li>
                        ))}
                      </ul>
                      <Button className="text-2xl font-light p-0 bg-transparent">
                        LEARN MORE →
                      </Button>
                    </div>
                    <div className="flex justify-center">
                      {tab.illustration && (
                        <img
                          src={tab.illustration}
                          alt={tab.title}
                          width={418}
                          height={418}
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