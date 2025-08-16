import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-gray-100 via-yellow-50 to-yellow-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-600">Furny</div>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <a href="#" className="hover:text-yellow-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-600 focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // X mark
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Menu icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden transition-all duration-300 ease-in-out opacity-100 translate-y-0 pointer-events-auto">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-4 px-4 pb-4 text-gray-700 font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-600"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
