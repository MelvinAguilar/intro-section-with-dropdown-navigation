import logo from "../../assets/images/logo.svg";
import Navbar from "./Navbar/Navbar";
import styles from "../../styles";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("h-screen");
  };

  return (
    <header
      className={`${styles.container} flex items-center justify-between py-[1.3125rem]`}
    >
      <a
        href="#main"
        className="absolute left-0 z-[100] m-3 -translate-x-[150%] bg-almost-black p-3 text-white transition focus:translate-x-0"
      >
        Skip to main content
      </a>
      <a href="#" className="mr-[3.875rem]">
        <img
          src={logo}
          alt="snap"
          width={91}
          height={26}
          className={`${styles.transition} mt-[0.3125rem]`}
        />
      </a>

      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      {/* overlay */}
      <div
        className={`bg-maastricht-blue pointer-events-none absolute top-0 left-0 z-10 h-full w-full bg-almost-black opacity-0 transition  duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "!opacity-40 " : ""
        }`}
      ></div>
    </header>
  );
};

export default Header;
