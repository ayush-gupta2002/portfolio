import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, label: "Home", redirect: "home" },
    { id: 2, label: "About", redirect: "about" },
    { id: 3, label: "Portfolio", redirect: "portfolio" },
    { id: 4, label: "Skills", redirect: "skills" },
    { id: 5, label: "Contact", redirect: "contact" },
  ];
  const renderedLinks = links.map((l) => {
    return (
      <li
        key={l.id}
        className="px-4 cursor-pointer text-gray-500 font-medium hover:scale-105 duration-200 hover:text-white"
      >
        <Link to={l.redirect} smooth duration={500}>
          {l.label}
        </Link>
      </li>
    );
  });

  const renderedMenuItems = links.map((l) => {
    return (
      <li
        key={l.id}
        className="px-4 py-4 text-4xl cursor-pointer text-gray-500 font-medium hover:scale-105 duration-200 hover:text-white"
      >
        <Link
          to={l.redirect}
          smooth
          duration={500}
          onClick={() => {
            setNav(!nav);
          }}
        >
          {l.label}
        </Link>
      </li>
    );
  });

  return (
    <div className="px-4 flex justify-between items-center w-full h-20 text-white fixed bg-black">
      <div>
        <h1 className="font-signature text-5xl ml-2 font-semibold">Ayush</h1>
      </div>
      <ul className="hidden md:flex">{renderedLinks}</ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="md:hidden"
      >
        {nav ? (
          <FaTimes
            size={30}
            className="cursor-pointer z-10 text-gray-500 hover:text-white duration-200"
          ></FaTimes>
        ) : (
          <FaBars
            size={30}
            className="cursor-pointer z-10 text-gray-500 hover:text-white duration-200"
          ></FaBars>
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {renderedMenuItems}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
