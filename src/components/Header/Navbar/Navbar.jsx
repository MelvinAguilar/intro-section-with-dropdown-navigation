import styles from "../../../styles";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useState } from "react";
import { useRef, useEffect } from "react";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [companyMenu, setCompanyMenu] = useState(false);
  const [featuresMenu, setFeaturesMenu] = useState(false);
  // Use ref to get the menus instead of getElementById
  const refCompany = useRef(null);
  const refFeatures = useRef(null);

  // Use this to set a visibility hidden, because the visibility is not working with the transition
  useEffect(() => {
    // If company menu is closed, use setTimeout to set a visibility hidden after 0.3s
    if (!companyMenu)
      setTimeout(() => {
        refCompany.current.style.visibility = "hidden";
      }, 220);
    // If company menu is open set a visibility visible
    else refCompany.current.style.visibility = "visible";
  }, [companyMenu]);

  useEffect(() => {
    if (!featuresMenu)
      setTimeout(() => {
        refFeatures.current.style.visibility = "hidden";
      }, 220);
    else refFeatures.current.style.visibility = "visible";
  }, [featuresMenu]);

  const handleCompanyMenu = () => {
    setCompanyMenu(!companyMenu);
    setFeaturesMenu(false);
  };

  const handleFeaturesMenu = () => {
    setFeaturesMenu(!featuresMenu);
    setCompanyMenu(false);
  };

  return (
    <nav aria-label="Main" className="w-auto lg:w-full">
      <ul
        className={`z-40 flex   translate-x-[150%] flex-col items-start gap-4 p-10 pt-24 text-[0.875rem]   lg:flex-row lg:items-center lg:gap-10 lg:p-0 ${
          isMenuOpen ? "!translate-x-0 max-lg:overflow-y-auto" : ""
        } ${
          styles.transition + " " + styles.navmobile + " " + styles.navdesktop
        }`}
        id="navbar-menu"
      >
        <li className="relative">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={featuresMenu}
            aria-controls="features-menu"
            onClick={handleFeaturesMenu}
            className={`${styles.transition} icon-menu flex gap-2 tracking-wide text-medium-gray hover:text-almost-black`}
          >
            Features
          </button>

          <ul
            id="features-menu"
            className={`${styles.transition} ${styles.submenumobile} ${
              styles.submenudesktop
            } ${
              featuresMenu
                ? "p-4 pb-0 lg:translate-y-[3rem] lg:opacity-100  max-lg:max-h-max "
                : ""
            } flex w-max flex-col gap-4 rounded-md  bg-white leading-none  lg:right-0 lg:-translate-y-[100%] lg:opacity-0 `}
            ref={refFeatures}
          >
            <li>
              <a
                href="#"
                className={`${styles.transition} icon-todo flex gap-4 text-medium-gray hover:text-almost-black`}
              >
                Todo List
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.transition} icon-calendar flex gap-4 text-medium-gray hover:text-almost-black`}
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.transition} icon-reminder flex gap-4 text-medium-gray hover:text-almost-black`}
              >
                Reminders
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.transition} icon-planning flex gap-4 text-medium-gray hover:text-almost-black`}
              >
                Planning
              </a>
            </li>
          </ul>
        </li>
        <li className="relative">
          <button
            type="button"
            className={`${styles.transition} icon-menu flex gap-2 text-medium-gray hover:text-almost-black`}
            aria-haspopup="true"
            aria-expanded={companyMenu}
            aria-controls="company-menu"
            onClick={handleCompanyMenu}
          >
            Company
          </button>
          <ul
            id="company-menu"
            className={`${styles.transition} ${styles.submenumobile} ${
              styles.submenudesktop
            } ${
              companyMenu
                ? "p-4 pb-0 lg:!translate-y-[3rem] lg:!opacity-100  max-lg:!max-h-max "
                : ""
            } flex w-max flex-col gap-4 rounded-md  bg-white leading-none lg:left-0 lg:-translate-y-[100%] lg:opacity-0 `}
            ref={refCompany}
          >
            <li>
              <a
                href="#"
                className={`${styles.transition} block text-medium-gray hover:text-almost-black`}
              >
                History
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.transition} block text-medium-gray hover:text-almost-black`}
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.transition} block text-medium-gray hover:text-almost-black`}
              >
                Blog
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            className={`${styles.transition} block text-medium-gray hover:text-almost-black`}
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${styles.transition} block text-medium-gray hover:text-almost-black`}
          >
            About
          </a>
        </li>
        <li className="pt-4 md:mr-[0.1875rem] md:pt-0 lg:ml-auto">
          <a
            href="#"
            className={`${styles.transition} block text-medium-gray hover:text-almost-black`}
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${styles.transition} block rounded-xl border border-almost-black px-[1.3125rem]  py-[0.625rem]  text-medium-gray hover:text-almost-black`}
          >
            Register
          </a>
        </li>
      </ul>

      <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;
