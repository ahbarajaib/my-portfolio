import { useState } from "react";
import { motion } from "framer-motion";
import { BsSun, BsMoon, BsLightning } from "react-icons/bs";

const ThemeToggle = ({ theme, setTheme }) => {
  const themes = ["dark", "light", "cyberpunk"];

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <BsSun className="w-5 h-5" />;
      case "cyberpunk":
        return <BsLightning className="w-5 h-5" />;
      default:
        return <BsMoon className="w-5 h-5" />;
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={cycleTheme}
      className="fixed top-20 right-8 z-50 p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {getIcon()}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
