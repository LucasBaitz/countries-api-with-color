import { Moon } from "lucide-react";
import React from "react";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Header: React.FC = () => {
  return (
    <header className="py-5 shadow-md dark:bg-[#2B3743]">
      <div className="flex lg:container justify-around lg:justify-between">
        <h1 className="font-black text-lg lg:text-2xl p-2 text-nowrap">
          Where in the world?
        </h1>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
