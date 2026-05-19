/* eslint-disable @next/next/no-img-element */
import React from "react";

const blogData = [
  {
    id: 1,
    title: "WEB VS MOBILE APPS",
    image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg",
    tags: ["web", "mobile", "strategy"],
  },
  {
    id: 2,
    title: "WHY CLEAN UI IMPROVES PRODUCT PERFORMANCE",
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg",
    tags: ["ui/ux", "conversion", "design"],
  },
  {
    id: 3,
    title: "PREPARING YOUR BUSINESS FOR AI",
    image:
      "https://images.pexels.com/photos/16094056/pexels-photo-16094056.jpeg",
    tags: ["AI", "automation", "future tech"],
  },
  {
    id: 4,
    title: "FROM MVP TO ENTERPRISE",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    tags: ["startups", "scaling", "systems"],
  },
];

const BlogCards = () => {
  return (
    <div className="bg-black py-20 px-10">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-300 mx-auto">
        {blogData.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-125 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <div className="flex items-center mt-4 gap-2">
              <span className="w-2 h-2 bg-[#FFD400] rounded-full"></span>

              <h3 className="text-white text-sm tracking-wide">{blog.title}</h3>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#1A1A1D] text-gray-300 text-xs px-3 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-14">
        <button className="bg-[#FFC700] text-xl text-black px-6 py-2 rounded-xl  font-light hover:opacity-90 transition">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
