import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // Preventing event from propagating to window otherwise when the burger is clicked, window was also getting clicked automatically.
    setSidebar(!sidebar);
  };
  window.onclick = () => {
    if (sidebar) {
      setSidebar(false);
    }
  };
  console.log(sidebar);

  return (
    <div className="w-full px-6 lg:px-16 flex items-center md:justify-between bg-black text-white">
      <div className="flex">
        <Link to="/">
          <div className="my-2 text-2xl md:text-3xl font-bold">PerfumeShop</div>
        </Link>
        <ul className="ml-10 hidden md:flex items-center text-dim-grey">
          <Link to="/about" className="p-5 hover:text-yellow focus:text-yellow">
            About
          </Link>
          <Link
            to="/location"
            className="p-5 hover:text-yellow focus:text-yellow"
          >
            Location
          </Link>
          <Link
            to="/careers"
            className="p-5 hover:text-yellow focus:text-yellow"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="p-5 hover:text-yellow focus:text-yellow"
          >
            Contact
          </Link>
        </ul>
      </div>
      <Link to="/">
        <button className="hidden md:inline ml-2 px-4 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 ">
          Shop Now
        </button>
      </Link>
      {/* HamBurger icon */}
      <div
        id="burger"
        onClick={handleClick}
        className="absolute right-3 text-xl md:hidden"
      >
        <RxHamburgerMenu />
      </div>

      {/* SMALL SCREEN NAVBAR MENU */}
      {sidebar && (
        <nav className="navbar h-screen w-1/2 absolute top-0 right-0 flex flex-col justify-center bg-gray-400 md:hidden">
          <Link
            to="/"
            onClick={handleClick}
            className="Nav py-3 px-10 text-xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleClick}
            className="Nav py-3 px-10 text-xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in"
          >
            About
          </Link>
          <Link
            to="/location"
            onClick={handleClick}
            className="Nav py-3 px-10 text-xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in"
          >
            Location
          </Link>
          <Link
            to="/careers"
            onClick={handleClick}
            className="Nav py-3 px-10 text-xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            onClick={handleClick}
            className="Nav py-3 px-10 text-xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in"
          >
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
