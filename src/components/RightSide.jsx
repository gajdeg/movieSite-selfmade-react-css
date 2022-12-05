import "./rightside.css";
import React from "react";
import { Circle } from "./Circle";
import { SideContainer } from "./SideContainer";
export default function RightSide() {
  return (
    <div className="rightSide">
      <SideContainer>
        <div
          style={{
            position: "absolute",
            height: "65vh",
            width: "65vh",
            right: 0,
            top: "50%",
            transform: "translate(40%, -50%)",
          }}
        >
          <Circle
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            size={"100%"}
            className="bg-white border-primary"
          />
          <Circle
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            size={"80%"}
            className="bg-white border-primary"
          />
          <Circle
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            size={"60%"}
            className="bg-primary"
          />
          <Circle
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
            size={"40%"}
            className="bg-white"
          />
        </div>
        <div className="copyRight">Copyright ©2022. All rights reserved.</div>
      </SideContainer>
    </div>
  );
}
