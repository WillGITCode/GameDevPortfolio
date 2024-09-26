import { ReactNode, createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     setTheme(darkMediaQuery.matches ? "dark" : "light");
//     darkMediaQuery.addEventListener("change", (e) => {
//       setTheme(e.matches ? "dark" : "light");
//     });
//   }, []);

//   const toggleTheme = () => {
//     const name = theme === "dark" ? "light" : "dark";
//     localStorage.setItem("theme", name);
//     setTheme(name);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export { ThemeProvider, ThemeContext };
