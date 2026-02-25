"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Image from "next/image";

const tabsData = [
  {
    value: "product-engineering",
    image:"/product-engineering.svg",
    label: "Product Engineering",
    title: "End-to-End Product Development at Scale",
    subtitle:
      "Turn your ideas into powerful digital products with Bee Glad’s expert engineering team. We design, develop, and deliver secure, high-performance web and mobile applications built to scale with your business.",
    list: [
      "Custom Web & Mobile Apps",
      "UI/UX-Driven Development",
      "Scalable & Secure Architecture",
      "Ongoing Support & Optimization",
    ],
  },
  {
    value: "cloud-ai-solutions",
    label: "Cloud & AI Solutions",
    image: "/cloud-ai-solutions.svg",
    content: "Cloud & AI Solutions Content",
  },
  {
    value: "dedicated-teams",
    label: "Dedicated Teams",
    image: "/dedicated-teams.svg",
    content: "Dedicated Teams Content",
  },
];

const SmartDigital = () => {
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
      <div className="max-w-7xl mx-auto pt-20">
        <Tabs
          defaultValue={tabsData[0].value}
          className="w-full"
        >
          {/* Dynamic Tab Triggers */}
          <TabsList className="w-full flex bg-transparent p-0">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
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
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Dynamic Tab Content */}
          <div className="p-8">
            {tabsData.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="text-white"
              >
                <div className="grid grid-cols-2 gap-10 items-center">
                  <div className="space-y-9">
                    <h1 className="text-2xl font-light">{tab.title}</h1>
                    <p className="text-[16px] font-normal text-[#737373]">
                      {tab.subtitle}
                      applications built to scale with your business.
                    </p>

                    <ul className="space-y-3 my-4 text-[#E0C998] text-[16px] font-normal">
                      {(tab.list ?? []).map((item, index) => (
                        <li
                          key={index}
                          className="relative pl-7 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-[url('/list-icon.svg')] before:bg-contain before:bg-no-repeat"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="text-2xl font-light p-0 bg-transparent">
                      LEARN MORE →
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    {tab.image && (
                      <Image
                        src={tab.image}
                        alt="Smart Digital Image"
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
    </div>
  );
};

export default SmartDigital;
