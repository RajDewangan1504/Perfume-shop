import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
    <div className="text-xl font-bold">Perfume Shop</div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/shop" className="hover:text-gray-300">Shop</Link>
      <Link to="/about" className="hover:text-gray-300">About Us</Link>
      <Link to="/contact" className="hover:text-gray-300">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
