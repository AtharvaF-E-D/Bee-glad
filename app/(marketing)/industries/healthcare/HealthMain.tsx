import Image from "next/image";

const HealthMain = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-center p-20">
      <div className="space-y-7">
        <h2 className="text-[#FDCA0F] text-3xl font-light">
          Healthcare & Medical
        </h2>
        <h1 className="bg-linear-to-r from-[#FDCA0F] to-[#E5E5E5] bg-clip-text text-transparent text-5xl font-light">
          Building Secure, Compliant Healthcare Solutions
        </h1>
        <p className="text-xl font-light">
          Bee Glad delivers digital healthcare platforms that improve patient
          care, streamline operations, and protect sensitive medical data.
        </p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/7088493/pexels-photo-7088493.jpeg" alt="" className="rounded-xl" />
      </div>
    </div>
  );
};

export default HealthMain;
