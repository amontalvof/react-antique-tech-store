import React from "react";
import { FooterWrapper } from "./FooterStyle";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="flex-container">
        <div>
          <a className="iconosSociales" href={"https://github.com/amontalvof/react-antique-tech-store/"}>
            <FaGithub />
          </a>
        </div>
        <div>
          <p>
            &copy; Andy Montalvo {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
}
