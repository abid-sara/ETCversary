import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ sectionsRef }) => {
  const [clicked, setClicked] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const items = [
    { name: "Home", ref: "heroSection" },
    { name: "ETCVersary", ref: "etcVersary" },
    { name: "Agenda", ref: "agenda" },
    { name: "Community", ref: "community" },
    { name: "About ETC", ref: "about" },
  ];

  const handleClicked = (index, refName) => {
    setClicked(index);
    setMenuOpen(false);

    sectionsRef[refName].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
            className={`cursor-pointer transition duration-300 hover:text-yellowCustom ${
              clicked === index ? "text-yellowCustom" : "text-white"
            }`}
            onClick={() => handleClicked(index, item.ref)}
          >
            {item.name}
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
          className="lg:hidden fixed top-0 right-0 bg-[#011a26] w-3/4 h-full flex flex-col items-center py-20 space-y-8 text-white"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer list-none transition duration-300 hover:text-yellowCustom ${
                clicked === index ? "text-yellowCustom" : "text-white"
              }`}
              onClick={() => handleClicked(index, item.ref)}
            >
              {item.name}
            </li>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
