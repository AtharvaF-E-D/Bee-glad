/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getResources } from "@/lib/appwrite/resources";

const ResourcesCarousel = () => {
  const carouselRef = useRef(null);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const data = await getResources();
      setResources(data ?? []);
    };
    fetchResources();
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-white py-12 md:py-16 px-4 md:px-10 relative overflow-hidden">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2">
            Resources
          </h2>
          <p className="text-[#737373] text-sm sm:text-base md:text-lg">
            Latest insights, guides, and perspectives from Bee Glad.
          </p>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-3 self-start md:self-auto">
          <button
            onClick={() => scroll("left")}
            className="bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 clip-hexagon transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 sm:p-3 clip-hexagon transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar max-w-7xl mx-auto snap-x snap-mandatory"
      >
        {resources.map((item) => (
          <motion.div
            key={item.$id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="
              snap-start
              flex-shrink-0
              w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%]
              bg-[#111] overflow-hidden shadow-lg rounded-md
            "
          >
            {/* IMAGE */}
            <img
              src={
                item.Image ||
                "https://images.unsplash.com/photo-1518770660439-4636190af475"
              }
              alt={item.Title}
              className="h-40 sm:h-48 md:h-56 w-full object-cover"
            />

            {/* CONTENT */}
            <div className="p-4 sm:p-5 md:p-6">
              
              <div className="flex items-center gap-2 text-yellow-400 mb-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 clip-hexagon" />
                <span className="text-xs sm:text-sm tracking-wide">
                  {item.Title}
                </span>
              </div>

              {/* TAGS */}
              <div className="flex gap-2 flex-wrap">
                {(item.tags ?? "").split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#E8E8E8] text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-[2px]"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* HEXAGON STYLE */}
      <style>
        {`
          .clip-hexagon {
            clip-path: polygon(
              50% 0%,      
              100% 22%, 
              100% 75%, 
              50% 100%,   
              0% 75%, 
              0% 22%
            );
          }
        `}
      </style>
    </div>
  );
};

export default ResourcesCarousel;