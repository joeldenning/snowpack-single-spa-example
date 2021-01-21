import React from "react";
import singleSpaLogoUrl from "./single-spa-logo.png";

export default function HelloWorld(props) {
  return (
    <div className="snowpack-test">
      <img
        src={singleSpaLogoUrl}
        alt="single-spa logo"
        style={{ width: "40px" }}
      />
      Hello from your react + snowpack + single-spa application
    </div>
  );
}
