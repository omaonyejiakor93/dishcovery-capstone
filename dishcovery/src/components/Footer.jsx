import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Dishcovery. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link to="/copyright" className="hover:text-green-400">
            Copyright
          </Link>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-green-400">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-green-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}