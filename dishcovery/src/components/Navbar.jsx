import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          Dishcovery
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "text-gray-700 hover:text-green-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "text-gray-700 hover:text-green-700"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "text-gray-700 hover:text-green-700"
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  );
}