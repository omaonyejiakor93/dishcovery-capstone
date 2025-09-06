// src/components/Footer.jsx
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <h2 className="text-xl font-bold text-white mb-4 md:mb-0">
          DishCovery 🍴
        </h2>

        {/* Navigation Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/search" className="hover:text-white transition-colors">
              Search
            </a>
          </li>
          <li>
            <a href="/favorites" className="hover:text-white transition-colors">
              Favorites
            </a>
          </li>
        </ul>

        {/* Social Media */}
        <div className="flex gap-4 text-xl">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DishCovery. All rights reserved.
      </div>
    </footer>
  );
}