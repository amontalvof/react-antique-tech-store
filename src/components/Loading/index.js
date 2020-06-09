import React from "react";
import { LoadingWrapper } from "./LoadingStyle";
import { ScaleLoader } from "react-spinners";

export default function index({ pTop }) {
  return (
    <LoadingWrapper pTop={pTop}>
      <div className="loadingSpinner">
        <ScaleLoader
          height="70px"
          width="8px"
          radius="4px"
          margin="4px"
          color="#6860db"
          loading={true}
        />
      </div>
      <div className="loadingText">
        <h1>
          <strong>Loading...</strong>
        </h1>
      </div>
    </LoadingWrapper>
  );
}
