"use client";

import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full flex justify-center bg-black ">
      <div className="relative w-[93%] rounded-3xl overflow-hidden group">
        
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-161.5 object-cover rounded-3xl"
          src="https://www.pexels.com/download/video/35751722/"   // 🔥 Replace with your video
        />

        {/* Dark Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300">
            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Play size={28} />
            </button>
          </div>
        )}

        {/* Click Anywhere to Pause */}
        {isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;