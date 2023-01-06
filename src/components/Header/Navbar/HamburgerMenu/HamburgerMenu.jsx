import styles from "../../../../styles";

const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="z-50 flex h-[1.15rem] w-8 flex-col justify-between lg:hidden"
      aria-haspopup="true"
      aria-expanded={isMenuOpen}
      aria-controls="navbar-menu"
    >
      <span className="sr-only">Open menu</span>
      <span
        className={`z-50 h-0.5 w-7 transform bg-almost-black ${
          isMenuOpen ? "translate-y-2 -translate-x-1 rotate-45 " : ""
        } ${styles.transition}`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-0.5 w-7 bg-almost-black ${
          isMenuOpen ? " opacity-0" : ""
        } ${styles.transition}`}
        aria-hidden="true"
      ></span>
      <span
        className={`z-50 h-0.5 w-7 transform bg-almost-black  ${
          isMenuOpen ? "-translate-y-2 -translate-x-1 -rotate-45 " : ""
        } ${styles.transition}`}
        aria-hidden="true"
      ></span>
    </button>
  );
};

export default HamburgerMenu;
