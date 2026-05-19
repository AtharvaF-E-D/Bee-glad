/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllResources } from "@/lib/services/admin/resourceServices";

interface Resource {
    _id: string;
    title: string;
    image?: string;
    tags?: string[];
}

const ResourcesCarousel = () => {

    const carouselRef = useRef<HTMLDivElement>(null);

    const [resources, setResources] = useState<Resource[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchResources = async () => {

            try {

                const response = await getAllResources();

                if (response?.success) {
                    setResources(response?.data || []);
                }

            } catch (error) {

                console.error(
                    "Resources fetch error:",
                    error
                );

            } finally {

                setLoading(false);
            }
        };

        fetchResources();

    }, []);

    const scroll = (direction: "left" | "right") => {

        if (carouselRef.current) {

            const width =
                carouselRef.current.offsetWidth;

            carouselRef.current.scrollBy({
                left:
                    direction === "left"
                        ? -width
                        : width,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="text-white py-16 px-10 relative overflow-hidden">

            <div className="mx-auto mb-10">

                <h2 className="text-5xl font-light mb-2">
                    Resources
                </h2>

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
                className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar mx-auto"
            >

                {loading ? (

                    [1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="min-w-[350px] bg-[#111] animate-pulse"
                        >

                            <div className="h-56 bg-slate-800" />

                            <div className="py-6">

                                <div className="h-5 bg-slate-800 rounded w-40 mb-4" />

                                <div className="flex gap-2">
                                    <div className="h-6 w-16 bg-slate-800 rounded" />
                                    <div className="h-6 w-20 bg-slate-800 rounded" />
                                    <div className="h-6 w-14 bg-slate-800 rounded" />
                                </div>

                            </div>

                        </div>
                    ))

                ) : resources.length > 0 ? (

                    resources.map((item) => (

                        <motion.div
                            key={item._id}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="min-w-[350px] bg-[#111] overflow-hidden shadow-lg"
                        >

                            <img
                                src={
                                    item.image ||
                                    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop"
                                }
                                alt={item.title}
                                className="h-56 w-full object-cover"
                            />

                            <div className="py-6">

                                <div className="flex items-center gap-2 text-yellow-400 mb-3">

                                    <div className="w-3 h-3 bg-yellow-400 clip-hexagon" />

                                    <span className="text-sm tracking-wide">
                                        {item.title}
                                    </span>

                                </div>

                                <div className="flex gap-2 flex-wrap">

                                    {item.tags?.map(
                                        (tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#E8E8E8] text-black text-xs px-3 py-1 rounded-[2px]"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}

                                </div>

                            </div>

                        </motion.div>
                    ))

                ) : (

                    <div className="w-full flex items-center justify-center py-20">

                        <p className="text-slate-400 text-lg">
                            No resources found
                        </p>

                    </div>
                )}

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
