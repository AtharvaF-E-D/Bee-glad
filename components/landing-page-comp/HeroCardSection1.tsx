import { HeroMainCardData1 } from "@/lib/landingpage";
import Image from "next/image";

const HeroCardSection1 = () => {
  return (
    <div className="max-w-7xl grid grid-cols-3 mx-auto py-20">
      {HeroMainCardData1.map((item) => (
        <div key={item.id} className="w-100.5 h-60.75 bg-[#7E827F24] pt-3 pr-3.5 pb-3 pl-3.5 rounded-[9px]">
          <div className="bg-[#7E827F24] w-93.5 h-54.75 flex flex-col items-center justify-start gap-3.5 rounded-[9px] py-8 pb-6">
            <Image
              src={item.icon}
              alt={`hero-card-${item.id}`}
              width={57}
              height={57}
            />
            <h1 className="text-xl font-light">{item.title}</h1>
            <p className="text-[#737373] text-[16px]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCardSection1;
