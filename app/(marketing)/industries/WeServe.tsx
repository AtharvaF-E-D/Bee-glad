"use client";
import Link from "next/link";

const industries = [
  {
    title: "Healthcare & Medical Tech",
    description:"Modernize patient care and medical workflows with custom healthcare applications, telemedicine tools, medical portals, and secure data systems.",
    image: "/industries/serve-1.jpeg",
    href: "/industries/healthcare",
  },
  {
    title: "Retail & eCommerce",
    description: "Deliver seamless shopping experiences with responsive eCommerce platforms, inventory systems, personalization engines, and secure checkout solutions.",
    image: "/industries/serve-2.jpeg",
    href: "/industries/retail-ecommerce",
  },
  {
    title: "Learning & Education",
    description: "Modernize patient care and medical workflows with custom healthcare applications, telemedicine tools, medical portals, and secure data systems.",
    image: "/industries/serve-3.jpeg",
    href: "/industries/education",
  },
  {
    title: "Corporate",
    description: "Deliver seamless shopping experiences with responsive eCommerce platforms, inventory systems, personalization engines, and secure checkout solutions.",
    image: "/industries/serve-4.jpeg",
    href: "/industries/corporate",
  },
  {
    title: "Logistics",
    description: "Modernize patient care and medical workflows with custom healthcare applications, telemedicine tools, medical portals, and secure data systems.",
    image: "/industries/serve-5.jpeg",
    href: "/industries/logistic",
  },
];

const WeServe = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-337.5 mx-auto px-6">
        {/* Heading */}
        <h1 className="text-center text-5xl font-light bg-linear-to-r from-[#FDCA0F] to-[#E5E5E5] bg-clip-text text-transparent mb-28">
          Industries We Serve
        </h1>

        {/* Industries */}
        <div className="space-y-36">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 items-center gap-20"
            >
              {/* Image */}
              <div
                className={`${
                  index % 2 !== 0 ? "lg:order-2 justify-end" : "justify-start"
                } flex justify-center`}
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-130 h-95 object-cover rounded-[28px]"
                />
              </div>

              {/* Content */}
              <div
                className={`${index % 2 !== 0 ? "lg:order-1" : ""} max-w-120`}
              >
                <h2 className="text-5xl font-normal mb-6 leading-tight">
                  {industry.title}
                </h2>

                <p className="text-xl font-light leading-relaxed mb-8">
                  {industry.description}
                </p>

                <Link
                  href={industry.href}
                  className="inline-block px-8 py-3 border border-[#FDCA0F] rounded-full text-[#FDCA0F] hover:bg-[#FDCA0F] hover:text-black transition duration-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeServe;
