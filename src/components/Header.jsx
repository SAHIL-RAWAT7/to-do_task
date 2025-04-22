import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();

  const navLinkClasses = (path) =>
    `px-4 py-2 rounded-lg transition-colors duration-200 ${
      location.pathname === path
        ? "bg-green-600 text-white"
        : "text-white hover:bg-green-700"
    }`;

  return (
    <header className="bg-green-600 p-4 shadow-md border-b border-green-700 relative z-50">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-extrabold tracking-wide flex items-center gap-2">
          {/* Optional: Logo */}
          <span>🗂️</span> Task Manager
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className={navLinkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={navLinkClasses("/about")}>
            About
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="transition-transform duration-300 ease-in-out"
          >
            {isMenuOpen ? (
              <IoCloseOutline className="text-white text-3xl rotate-180" />
            ) : (
              <BiMenuAltRight className="text-white text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-green-700 p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={navLinkClasses("/")}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={navLinkClasses("/about")}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
