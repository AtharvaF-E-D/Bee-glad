import Image from "next/image";

const AboutMain = () => {
  return (
    <>
      <div className="h-[112vh] flex  bg-[url('/aboutus/aboutusMain.svg')] bg-cover  flex-col justify-center relative">
        <h1 className="font-light text-[64px] tracking-[2%] pl-104  leading-18.75 bg-linear-to-r from-[#FDCA0F] to-[#E5E5E5] bg-clip-text text-transparent">
          Building Digital <br /> Products That <br /> Create Real Impact
        </h1>
        <div className="absolute bottom-0 px-20">
          <p className="flex gap-10">
            <span>
              <Image width={40} height={39} src={'/aboutus/arrow-down.svg'} className="pt-4" alt={""} />
            </span>
            <span className="text-2xl font-light tracking-[1px] text-white/50">
              Bee-Glad is a digital innovation and software engineering company
              helping startups <br /> and enterprises turn ideas into scalable,
              secure, and market-ready products.
              <br />
            </span>
          </p>
          <p className="px-19 pt-5 text-white/50 text-2xl font-light">
            Strategy • Design • Engineering • AI
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
