// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Dishcovery
        </Link>

        {/* Links */}
        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/search"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Search
          </Link>
          <Link
            to="/favorites"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}