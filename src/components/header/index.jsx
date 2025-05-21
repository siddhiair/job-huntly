import React from "react";
import logo from "./../../assets/job-huntly-logo.png";
import Container from "../common/Container";

export const Logo = () => {
  return (
    <a href="/" aria-label="Go to Home" className="block">
      <img src={logo} width={100} height={27} alt="Logo" />
    </a>
  );
};

const Header = () => {
  return (
    <header className="bg-black py-3">
      <Container>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
