import React from "react";
import { FooterWrapper } from "./FooterStyle";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="flex-container">
        <div>
          <a className="iconosSociales" href={"https://www.facebook.com/"}>
            <FaFacebook />
          </a>
          <a className="iconosSociales" href={"https://www.linkedin.com/"}>
            <FaLinkedin />
          </a>
          <a className="iconosSociales" href={"https://www.github.com/"}>
            <FaGithub />
          </a>
        </div>
        <div>
          <p>
            Copyright &copy; amf-react-antique-tech-store{" "}
            {new Date().getFullYear()}, all rights reserved.
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
}
