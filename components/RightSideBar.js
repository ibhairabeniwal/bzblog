import React from "react";
import RightSideTopSection from "./RightSideTopSection";
import StaffPick from "./StaffPick";
import SubscribeSection from "./SubscribeSection";

const RightSideBar = () => {
  return (
    <div className="rightSideSection">
      <RightSideTopSection />
      <StaffPick />
      <SubscribeSection />
    </div>
  );
};

export default RightSideBar;
