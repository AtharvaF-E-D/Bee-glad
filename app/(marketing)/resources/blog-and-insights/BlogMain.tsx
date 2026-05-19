/* eslint-disable @next/next/no-img-element */
import { Search } from "lucide-react";
import React from "react";

const BlogMain = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center h-[50vh]">
        <img src="/resources/BlogInsightMain.svg" alt="" />
      </div>
      <div className="w-full px-10 pt-20 flex justify-between items-center">
        <p className="space-x-2.5 flex ">
          <span className="italic font-light text-3xl">SEE</span>
          <span className="uppercase font-light text-5xl">
            Ideas That Power <br /> Better Technology.
          </span>
        </p>
        <div>
          <button className="text-white text-sm font-light border p-2 px-3 rounded-xl">
            <Search className="inline" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
