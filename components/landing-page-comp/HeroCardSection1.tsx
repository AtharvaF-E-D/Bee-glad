import { HeroMainCardData1 } from "@/lib/landingpage";
import Image from "next/image";

const HeroCardSection1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {HeroMainCardData1.map((item) => (
        <div
          key={item.id}
          className="bg-[#7E827F24] p-4 rounded-[9px] hover:scale-[1.02] transition-all duration-300"
        >
          <div className="bg-[#7E827F24] flex flex-col items-center text-center gap-4 rounded-[9px] py-6 px-4 h-full">
            
            {/* ICON */}
            <Image
              src={item.icon}
              alt={`hero-card-${item.id}`}
              width={50}
              height={50}
              className="w-12 h-12 sm:w-14 sm:h-14"
            />

            {/* TITLE */}
            <h1 className="text-lg sm:text-xl font-light">
              {item.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-[#737373] text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCardSection1;