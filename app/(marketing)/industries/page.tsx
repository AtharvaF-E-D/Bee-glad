import React from "react";
import IndustriesMain from "./IndustriesMain";
import VideoPlayer from "./VideoPlayer";
import WeServe from "./WeServe";

const page = () => {
  return (
    <div className="text-white">
      <IndustriesMain />
      <VideoPlayer />
      <WeServe />
    </div>
  );
};

export default page;
