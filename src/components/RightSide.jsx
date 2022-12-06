import "./rightside.css";
import React from "react";
import { Circle } from "./Circle";
import { SideContainer } from "./SideContainer";
export default function RightSide() {
  return (
    <div className="rightSide">
      <SideContainer>
        <div className="div-circle">
          <Circle size={"100%"} className="bg-white border-primary" />
          <Circle size={"80%"} className="bg-white border-primary" />
          <Circle size={"60%"} className="bg-primary" />
          <Circle size={"40%"} className="bg-white" />
        </div>
        <div className="copyRight">Copyright ©2022. All rights reserved.</div>
      </SideContainer>
    </div>
  );
}
