/* eslint-disable @next/next/no-img-element */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { getSmartSolutions } from "@/lib/services/admin/smartSolution.service";

const SmartDigital = () => {

  const [solutions, setSolutions] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchSolutions = async () => {

      try {

        const response = await getSmartSolutions();

        if (response?.success) {

          setSolutions(response?.data || []);
        }

      } catch (error) {

        console.error(
          "Solutions fetch error:",
          error
        );

      } finally {

        setLoading(false);
      }
    };

    fetchSolutions();

  }, []);

  return (
    <div>

      <div className="pt-20">

        <h1 className="text-[48px] font-light text-center">
          Smart Digital Solutions That Help
          <br />
          Your Business Grow
        </h1>

      </div>

      <div className="pt-8">

        <p className="text-center text-[#737373] text-xl font-normal px-4 max-w-7xl mx-auto">
          From product engineering to scalable cloud solutions,
          <br />
          Bee Glad helps you build, optimize, and scale digital experiences with confidence.
        </p>

      </div>

      {loading ? (

        <div className="max-w-7xl mx-auto pt-20">

          <div className="animate-pulse space-y-6">

            <div className="h-12 bg-[#1a1a1a] rounded-xl w-full" />

            <div className="grid grid-cols-2 gap-10">

              <div className="space-y-5">

                <div className="h-8 bg-[#1a1a1a] rounded w-2/3" />

                <div className="h-4 bg-[#1a1a1a] rounded w-full" />

                <div className="h-4 bg-[#1a1a1a] rounded w-5/6" />

                <div className="space-y-3 pt-4">

                  <div className="h-4 bg-[#1a1a1a] rounded w-1/2" />

                  <div className="h-4 bg-[#1a1a1a] rounded w-2/3" />

                  <div className="h-4 bg-[#1a1a1a] rounded w-1/3" />

                </div>

              </div>

              <div className="h-[420px] bg-[#1a1a1a] rounded-2xl" />

            </div>

          </div>

        </div>

      ) : solutions.length > 0 && (

        <div className="max-w-7xl mx-auto pt-20">

          <Tabs
            defaultValue={solutions[0]?._id}
            className="w-full"
          >

            <TabsList className="w-full flex bg-transparent p-0">

              {solutions.map((tab) => (

                <TabsTrigger
                  key={tab._id}
                  value={tab._id}
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

            <div className="p-8">

              {solutions.map((tab) => (

                <TabsContent
                  key={tab._id}
                  value={tab._id}
                  className="text-white"
                >

                  <div className="grid grid-cols-2 gap-10 items-center">

                    <div className="space-y-9">

                      <h1 className="text-2xl font-light">
                        {tab.subtitle}
                      </h1>

                      <p className="text-[16px] font-normal text-[#737373]">
                        {tab.description}
                      </p>

                      <ul className="space-y-3 my-4 text-[#E0C998] text-[16px] font-normal">

                        {tab.features?.map(
                          (item: string, index: number) => (
                            <li
                              key={index}
                              className="relative pl-7 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-[url('/list-icon.svg')] before:bg-contain before:bg-no-repeat"
                            >
                              {item}
                            </li>
                          )
                        )}

                      </ul>

                      <Button className="text-2xl font-light p-0 bg-transparent hover:bg-transparent">
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
                          className="object-contain"
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