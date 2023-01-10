import styles from "../../../styles";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";
import { useState } from "react";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [companyMenu, setCompanyMenu] = useState(false);
  const [featuresMenu, setFeaturesMenu] = useState(false);

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
      <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <ul
        className={`transition-visibility z-40 flex translate-x-[150%] flex-col items-start gap-4 p-10 pt-24 text-[0.875rem] text-medium-gray dark:text-white lg:flex-row lg:items-center lg:gap-10 lg:p-0 max-lg:invisible max-lg:dark:bg-gray-800 ${
          isMenuOpen ? "!visible !translate-x-0 max-lg:overflow-y-auto" : ""
        } ${styles.navmobile} ${styles.navdesktop}`}
        id="navbar-menu"
      >
        <li className="relative">
          <button
            type="button"
            className={`${styles.transition} icon-menu flex gap-2 tracking-wide hover:text-almost-black  dark:hover:text-gray-400`}
            aria-haspopup="true"
            aria-expanded={featuresMenu}
            aria-controls="features-menu"
            onClick={handleFeaturesMenu}
          >
            Features
          </button>

          <ul
            id="features-menu"
            className={`${styles.submenumobile} ${styles.submenudesktop} ${
              featuresMenu
                ? "!visible p-4 pb-0 lg:!translate-y-[3rem] lg:!opacity-100 max-lg:max-h-max"
                : ""
            } transition-visibility invisible flex w-max flex-col gap-4 rounded-md leading-none lg:right-0 lg:-translate-y-[40%] lg:bg-white/95 lg:opacity-0 lg:dark:bg-gray-800/95`}
          >
            {/* START Features Sub-menu */}
            {[
              ["icon-todo", "Todo List"],
              ["icon-calendar", "Calendar"],
              ["icon-reminder", "Reminders"],
              ["icon-planning", "Planning"],
            ].map(([className, text], index) => (
              <li key={`features-${index}`}>
                <a
                  href="#"
                  className={`${className} ${styles.transition} flex gap-4 hover:text-almost-black dark:hover:text-gray-400`}
                >
                  {text}
                </a>
              </li>
            ))}
            {/* END Features Sub-menu */}
          </ul>
        </li>
        <li className="relative">
          <button
            type="button"
            className={`${styles.transition} icon-menu flex gap-2  hover:text-almost-black dark:hover:text-gray-400`}
            aria-haspopup="true"
            aria-expanded={companyMenu}
            aria-controls="company-menu"
            onClick={handleCompanyMenu}
          >
            Company
          </button>
          {/* START company sub-menu */}
          <ul
            id="company-menu"
            className={`${styles.submenumobile} ${styles.submenudesktop} ${
              companyMenu
                ? "!visible p-4 pb-0 lg:!translate-y-[3rem] lg:!opacity-100 max-lg:max-h-max"
                : ""
            } transition-visibility invisible flex w-max flex-col gap-4 rounded-md leading-none lg:left-0 lg:-translate-y-[40%] lg:bg-white/95 lg:opacity-0 lg:dark:bg-gray-800/95`}
          >
            {[["History"], ["Our Team"], ["Blog"]].map(([text], index) => (
              <li key={`company-${index}`}>
                <a
                  href="#"
                  className={`${styles.transition} block hover:text-almost-black dark:hover:text-gray-400`}
                >
                  {text}
                </a>
              </li>
            ))}
            {/* END company Sub-menu */}
          </ul>
        </li>
        <li>
          <a
            href="#"
            className={`${styles.transition} block hover:text-almost-black dark:hover:text-gray-400`}
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${styles.transition} block hover:text-almost-black dark:hover:text-gray-400`}
          >
            About
          </a>
        </li>
        <li className="pt-4 md:mr-[0.1875rem] md:pt-0 lg:ml-auto">
          <ThemeSwitcher />
        </li>
        <li>
          <a
            href="#"
            className={`${styles.transition} block hover:text-almost-black dark:hover:text-gray-400`}
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${styles.transition} block rounded-xl border border-almost-black px-[1.3125rem] py-[0.625rem] hover:bg-almost-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-gray-800`}
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
