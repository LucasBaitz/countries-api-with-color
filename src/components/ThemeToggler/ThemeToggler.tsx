"use client";
import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="py-2 px-4 flex gap-2"
    >
      <Moon className="dark:fill-white" />
      Dark Mode
    </button>
  );
};

export default ThemeToggler;
