import { useRef, useEffect, useState } from "react";
import Image from "next/image";
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
        <div className="text-white py-16 px-10 relative overflow-hidden">
            <div className=" mx-auto mb-10">
                <h2 className="text-5xl font-light mb-2">Resources</h2>
                <p className="text-[#737373] text-xl">
                    Latest insights, guides, and perspectives from Bee Glad.
                </p>
            </div>

            <div className="absolute top-16 right-10 flex gap-3 z-10">
                <button
                    onClick={() => scroll("left")}
                    className="bg-gray-800 hover:bg-gray-700 p-3 clip-hexagon transition"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 clip-hexagon transition"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            <div
                ref={carouselRef}
                className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar  mx-auto"
            >
                {resources.map((item) => (
                    <motion.div
                        key={item.$id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="min-w-87.5 bg-[#111]  overflow-hidden shadow-lg"
                    >
                        <img
                            src={item.Image || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop"}
                            alt={item.Title}
                            width={350}
                            height={224}
                            className="h-56 w-full object-cover"
                        />

                        <div className="py-6">
                            <div className="flex items-center gap-2 text-yellow-400 mb-3">
                                <div className="w-3 h-3 bg-yellow-400 clip-hexagon" />
                                <span className="text-sm tracking-wide">
                                    {item.Title}
                                </span>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {(item.tags ?? "").split(",").map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#E8E8E8] text-black text-xs px-3 py-1 rounded-[2px]"
                                    >
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
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