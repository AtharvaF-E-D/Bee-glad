import ReadyImpact from "@/public/aboutus/ReadyImpact";
import AboutMain from "./AboutMain";
import HelpGrow from "./HelpGrow";
import OurClientAbout from "./OurClientAbout";
import OurVisionAndMission from "./OurVisionAndMission";
import ProjectsAboutus from "./ProjectsAboutus";
import WeBuild from "./WeBuild";
import WhoWeAre from "./WhoWeAre";

const page = () => {
  return (
    <div className="text-white bg-black">
      <AboutMain/>
      <OurClientAbout/>
      <WhoWeAre />
      <OurVisionAndMission />
      <WeBuild />
      <ProjectsAboutus />
      <HelpGrow />
      <ReadyImpact />
    </div>
  );
};

export default page;
