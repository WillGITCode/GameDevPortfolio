import "./App.css";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import { useContext, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const value = { theme, setTheme };
  console.log(theme);

  return (
    <ThemeContext.Provider value={value}>
      <div id="top" className={`${theme} app`}>
        <Header />

        {/* <main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>

    <ScrollToTop />
    <Footer /> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
