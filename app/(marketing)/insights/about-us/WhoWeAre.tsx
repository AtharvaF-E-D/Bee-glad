import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="bg-[url('/aboutus/inifnity.svg')] py-20 bg-cover bg-center px-10">
      <h1 className="text-4xl font-light pb-6.75 px-20">Who We Are</h1>
      <div className="grid grid-cols-2 px-10">
        <div className="px-10">
          <p className="text-2xl font-light text-white/50 pb-5">
            At Bee-Glad, we believe technology should do more than function — it
            should create value, delight users, and drive growth.
          </p>
          <p className="text-2xl font-light text-white/50 ">
            We partner with forward-thinking businesses to design and build
            digital solutions that are reliable, scalable, and built for the
            future. Our work blends strategy, user experience, and modern
            engineering to deliver measurable business outcomes.
          </p>
        </div>
        <div className="grid grid-cols-2 w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center pl-20">
            {" "}
            <Image src={"/aboutus/bee.gif"} width={70} height={70} alt={""} />
            <p className="text-xl">BEE-GLAD</p>
          </div>
          <div className="flex flex-col items-center justify-center pl-29">
            {" "}
            <Image src={"/aboutus/infinity.gif"} width={70} height={70} alt={""} />
            <p className="text-xl">LIVING INNOVAION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
