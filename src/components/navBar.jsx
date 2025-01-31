import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [clicked, setClicked] = useState(0);
  const items = ["Home", "ETCVersary", "Agenda", "Community", "About ETC"];

  const handleClicked = (index) => {
    setClicked(index);
  };

  return (
    <nav className="flex bg-blueCustom font-secondary font-bold text-lg text-white ">
      <img
        src="images/logoETC.png"
        alt="logo"
        className="lg:w-42 lg:h-28 pl-20"
      />

      <ul className="w-full flex items-center space-x-14 justify-center ml-56">
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
    </nav>
  );
};

export default NavBar;
