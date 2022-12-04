import React from "react";
import "./leftside.css";

export default function LeftSide() {
  return (
    <div className="leftSide">
      <div>
        <h3 className="header1 pst-abs">My Dashboard</h3>
        <h2 className="header2 pst-abs">Welcome to My Dashboard</h2>
      </div>
      <i className="line "></i>
      <div className="dLogin pst-abs">Login to access your account</div>
    </div>
  );
}
