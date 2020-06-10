import React from "react";
import { Error404Wrapper } from "./Error404Style";
import { Button } from "react-rainbow-components";
import { Link } from "react-router-dom";

function index() {
  return (
    <Error404Wrapper>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            <strong>
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </strong>
          </p>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            <Button
              label="Home Page"
              variant="border-filled"
              className="rainbow-m-around_large"
              style={{ fontWeight: "bold" }}
            />
          </Link>
        </div>
      </div>
    </Error404Wrapper>
  );
}

export default index;
