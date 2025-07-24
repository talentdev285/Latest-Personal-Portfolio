import React, { useState, useEffect } from "react";
import { SocialIcons } from "./icons/SocialIcons";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // if scroll down hide the header
          setIsVisible(false);
        } else {
          // if scroll up show the header
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mt-4 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 bg-white/70 dark:bg-dark-surface/70 backdrop-blur-lg rounded-2xl px-6 shadow-lg border border-white/20 dark:border-dark-border-color/50">
          <a
            href="/"
            className="text-2xl font-bold text-text-primary dark:text-dark-text-primary"
          >
            Murshida K.
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-semibold text-text-primary dark:text-dark-text-primary hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-semibold text-text-primary dark:text-dark-text-primary hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold text-text-primary dark:text-dark-text-primary hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-text-primary dark:text-dark-text-primary hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/murshida2023/"
              className="text-text-primary dark:text-dark-text-primary hover:text-primary transition-colors"
            >
              <SocialIcons.LinkedIn />
            </a>
            <a
              href="https://github.com/talentdev285"
              className="text-text-primary dark:text-dark-text-primary hover:text-primary transition-colors"
            >
              <SocialIcons.Github />
            </a>
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-light-gray dark:bg-dark-background"
            >
              <span className="text-yellow-500">
                {isDarkMode ? "🌙" : "☀️"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
