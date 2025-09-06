// src/components/Footer.js
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Dishcovery. All rights reserved. ·{" "}
          <Link
            to="/copyright"
            className="hover:text-yellow-300 transition-colors"
          >
            Copyright
          </Link>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            Facebook
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}