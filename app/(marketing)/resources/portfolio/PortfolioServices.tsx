import React from "react";

const services = [
  {
    title: "Custom Software Development",
    desc: "We build tailored software solutions aligned with your business goals, ensuring scalability, security, and long-term performance.",
  },
  {
    title: "Web Application Development",
    desc: "Modern, high-performance web applications using scalable architectures and intuitive user experiences.",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps designed for speed, usability, and seamless performance across devices.",
  },
  {
    title: "Cloud Solutions & DevOps",
    desc: "Cloud-ready architecture, deployment, and optimization using AWS, Azure, and modern DevOps practices.",
  },
  {
    title: "UI/UX Design",
    desc: "User-centered design focused on clarity, usability, and brand consistency—turning complexity into simplicity.",
  },
  {
    title: "AI & Automation Solutions",
    desc: "AI-powered features, analytics, and workflow automation to enhance efficiency and decision-making.",
  },
];

const industries = [
  "Healthcare & Medical",
  "FinTech & Banking",
  "Education & EdTech",
  "Retail & eCommerce",
  "Logistics & Transportation",
  "Startups & Digital Products",
];

const PortfolioServices = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[96px] font-light mb-4 tracking-wide">
          Services We Offer
        </h2>
        <p className="text-[#E5E5E5] max-w-xl mx-auto mb-16 text-xl tracking-wide">
          End-to-end digital services designed for scale, <br /> performance,
          and growth.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => {
            const isRightCol = (index + 1) % 3 === 0;
            const isBottomRow = index >= 3;

            return (
              <div
                key={index}
                className={`
          px-8 py-10 text-center
          border-[#ccaf6ad6]

          ${!isRightCol ? "md:border-r-2" : ""}
          ${!isBottomRow ? "border-b-2" : ""}
        `}
              >
                <h3 className="text-lg font-medium mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
        <div className="max-w-5xl mx-auto text-center pt-30">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-light mb-12">
          Industries We Work With
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12 text-gray-300 text-sm">
          {industries.map((item, index) => (
            <div key={index} className="flex items-center justify-start gap-2 text-2xl font-[320] py-3">
              <span className="text-gray-500">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioServices;
