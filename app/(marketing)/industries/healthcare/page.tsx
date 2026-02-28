import HeallthChallenges from "./HeallthChallenges";
import HealthMain from "./HealthMain";

const page = () => {
  return (
    <div className="min-h-screen text-white bg-black">
      <HealthMain />
      <HeallthChallenges />
    </div>
  );
};

export default page;
