import "./App.css";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div id="top" className={`${theme} app`}>
        <Header />

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
