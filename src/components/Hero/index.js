import React from "react";
import { HeroWrapper } from "./HeroStyle";

function index({ children, img, home, cart }) {
  return (
    <HeroWrapper img={img} cart={cart}>
      <div className="heroBack">
        {home ? (
          <div className="banner" style={{ width: "60%" }}>
            <h1 className="title">
              <strong>Antique Tech Store</strong>
            </h1>
            <p>
              <strong>Collectible Gadgets</strong>
            </p>
            {children}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </HeroWrapper>
  );
}

export default index;
