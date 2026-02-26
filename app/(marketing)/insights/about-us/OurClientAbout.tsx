import Image from "next/image";

const logo = [
  "/company-logo/Boligmatch.svg",
  "/company-logo/hobbyhub.svg",
  "/company-logo/instron.svg",
  "/company-logo/ioweb3.svg",
  "/company-logo/sugaroff.svg",
];

const OurClientAbout = () => {
  return (
    <div className="max-w-7xl mx-auto py-40">
      <p className="text-[19px] text-white/50 font-light mb-12">
        Our clients are backed by:
      </p>

      {/* Flex Container */}
      <div className="flex flex-wrap justify-center items-center gap-35">
        {logo.map((item, index) => (
          <div key={index}>
            <Image
              src={item}
              alt={`client-logo-${index}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClientAbout;