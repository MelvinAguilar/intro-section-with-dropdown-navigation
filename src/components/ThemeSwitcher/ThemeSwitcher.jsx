import { useEffect, useState } from "react";
import styles from "../../styles";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if ((userTheme && userTheme === "dark") || (!userTheme && systemTheme))
      setDarkMode(true);
    else setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <label
      className={`${styles.transition} text-text-medium-gray relative flex w-full items-center justify-between gap-[15px] hover:text-almost-black dark:hover:text-gray-400 md:justify-end`}
    >
      <input
        type="checkbox"
        className="m-t absolute top-0 left-0 z-10 h-full w-full cursor-pointer appearance-none"
        checked={darkMode}
        role="switch"
        aria-checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      Dark mode
      <span className="dot" aria-hidden="true"></span>
    </label>
  );
};

export default ThemeSwitcher;
