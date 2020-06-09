import React from "react";
import { TitleWrapper } from "./TitleStyle";

export default function index({ title }) {
  return (
    <TitleWrapper>
      <div className="titleText">
        <h1>{title}</h1>
      </div>
    </TitleWrapper>
  );
}
