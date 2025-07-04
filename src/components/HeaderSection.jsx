import { useEffect, useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import headerIcon from "../assets/images/logo.svg";

export function HeaderSection() {
  const [theme, setTheme] = useState(() => {
    // On first render, get theme from localStorage or system
    const userTheme = localStorage.theme;
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (userTheme === "dark" || (!userTheme && systemDark)) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <header className="flex flex-row justify-between m-4 p-2 bg-white rounded-md shadow-sm shadow-black dark:bg-slate-800 dark:shadow-slate-500">
        <img src={headerIcon} alt="" />
        <img
          src={theme == "dark" ? sunIcon : moonIcon}
          className="size-12 self-center p-2 rounded-xl bg-gray-200 dark:bg-slate-700"
          alt=""
          onClick={toggleTheme}
        />
      </header>
    </>
  );
}
