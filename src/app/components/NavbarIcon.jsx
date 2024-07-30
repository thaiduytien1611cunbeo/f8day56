"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarItem } from "@nextui-org/react";
import { useTheme } from "next-themes";

const NavbarIcon = () => {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <NavbarItem className="hidden lg:flex">
        {theme === "light" && (
          <FontAwesomeIcon
            onClick={handleSetTheme}
            icon={faMoon}
            className="fas fa-moon"
          />
        )}
        {theme === "dark" && (
          <FontAwesomeIcon
            onClick={handleSetTheme}
            icon={faSun}
            className="fas fa-sun"
          />
        )}
      </NavbarItem>
      <NavbarItem>
        <FontAwesomeIcon icon={faSearch} className="fas fa-search" />
      </NavbarItem>
      <NavbarItem>
        <FontAwesomeIcon icon={faUser} className="fas fa-user" />
      </NavbarItem>
    </>
  );
};

export default NavbarIcon;
