import React from "react";
import MobileAppMain from "./MobileAppMain";
import CoreCapablitiesAccordian from "./CoreCapablitiesAccordian";

const page = () => {
  return (
    <div className=" text-white">
      {/* <div
        style={{ height: "500px", width: "500px", backgroundColor: "yellow" }}
      >
        <div
          style={{ height: "300px", width: "300px", backgroundColor: "orange" }}
        >
          <div
            style={{ height: "100px", width: "100px", backgroundColor: "red" }}
          ></div>
        </div>
      </div> */}
      <MobileAppMain />
      <CoreCapablitiesAccordian />
    </div>
  );
};

export default page;
