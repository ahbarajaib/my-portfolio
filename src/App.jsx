import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import { Experience } from "./components/Experience";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import { Technologies } from "./components/Technologies";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const App = () => {
  const [theme, setTheme] = useState("dark");
  useSmoothScroll();

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const themeStyles = {
    dark: "bg-neutral-950 text-neutral-300",
    light: "bg-white text-neutral-900",
    cyberpunk: "bg-[#0f0f23] text-[#00ff9f]",
  };

  const gradientStyles = {
    dark: "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
    light: "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))]",
    cyberpunk: "bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,159,0.2),rgba(15,15,35,0))]",
  };

  return (
    <div className={`overflow-x-hidden ${themeStyles[theme]} antialiased selection:bg-cyan-300 selection:text-neutral-900 transition-colors duration-500`}>
      <CustomCursor />
      <ScrollProgress />
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <div className="fixed top-0 -z-10 h-full w-full">
        <div className={`absolute top-0 z-[-2] h-screen w-screen ${themeStyles[theme]} ${gradientStyles[theme]}`}></div>
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <footer className="py-8 text-center border-t border-neutral-800">
        <p className="text-neutral-400 text-sm">
          © 2024 Ahbar Ajaib. Crafted with passion and code.
        </p>
      </footer>
    </div>
  );
};

export default App;
