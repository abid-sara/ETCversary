import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [clicked, setClicked] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const items = ["Home", "ETCVersary", "Agenda", "Community", "About ETC"];

  const handleClicked = (index) => {
    setClicked(index);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-blueCustom p-4 font-secondary font-bold text-lg text-white px-20">
      <img
        src="images/logoETC.png"
        alt="logo"
        className="sm:w-42 sm:h-28 lg:w-25"
      />

      <ul className="hidden lg:flex items-center space-x-14 list-none">
        {items.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer transition duration-300 
                hover:text-yellowCustom ${
                  clicked === index ? "text-yellowCustom" : "text-white"
                }`}
            onClick={() => handleClicked(index)}
          >
            {item}
          </li>
        ))}
      </ul>

      <div
        className="lg:hidden flex justify-between items-center cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars className="text-white text-2xl" />
      </div>

      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden fixed top-0 right-0  bg-[#011a26] w-3/4 h-full flex flex-col items-center py-20 space-y-8 text-white"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer list-none transition duration-300 
                hover:text-yellowCustom ${
                  clicked === index ? "text-yellowCustom" : "text-white"
                }`}
              onClick={() => handleClicked(index)}
            >
              {item}
            </li>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
