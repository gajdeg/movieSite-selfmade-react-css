import React from "react";
import "./leftside.css";
import { SideContainer } from "./SideContainer";

export default function LeftSide() {
  return (
    <div className="leftSide">
      <SideContainer className="text-light">
        <h3>My Dashboard</h3>

        <div className="leftSize-down">
          <h2>Welcome to My Dashboard</h2>
          <div className="line"></div>
          <div>Login to access your account</div>
        </div>
      </SideContainer>
    </div>
  );
}
