import { useEffect, useState } from "react";

const useThemeMode = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const name = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", name);
    setTheme(name);
  };

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkMediaQuery.matches ? "dark" : "light");
    darkMediaQuery.addEventListener("change", (e) => {
      setTheme(e.matches ? "dark" : "light");
    });
  }, []);

  return { theme, toggleTheme };
};

export default useThemeMode;
