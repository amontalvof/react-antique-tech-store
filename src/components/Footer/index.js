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
            Copyright &copy; Andy Montalvo {new Date().getFullYear()}, all
            rights reserved.
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
}
