import React from "react";
import { HeroWrapper } from "./HeroStyle";
import img from "../../assets/images/HomeBgd.jpg";

function index({ children }) {
  return (
    <HeroWrapper img={img}>
      <div className="heroBack">
        <div className="banner" style={{ width: "60%" }}>
          <h1 className="title">
            <strong>Antique Tech Store</strong>
          </h1>
          <p>
            <strong>Collectible Gadgets</strong>
          </p>
          {children}
        </div>
      </div>
    </HeroWrapper>
  );
}

export default index;
