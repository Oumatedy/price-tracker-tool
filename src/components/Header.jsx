import React, { useState } from 'react';
import { Store, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Simulate NavLink functionality for demo
  const navLink = (to, label) => (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        closeMenu();
        // In your actual app, this would be NavLink with router functionality
      }}
      className="px-4 py-2 rounded-lg font-semibold transition-colors text-blue-700 hover:bg-blue-100 block"
    >
      {label}
    </a>
  );

  return (
    <header className="bg-white shadow-sm py-4 px-6 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Store className="text-blue-700 w-8 h-8" />
          <span className="text-2xl font-bold text-blue-700">ShopHub</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2">
          <a
            href="/"
            className="px-4 py-2 rounded-lg font-semibold transition-colors bg-blue-600 text-white shadow"
          >
            Home
          </a>
          <a
            href="/catalog"
            className="px-4 py-2 rounded-lg font-semibold transition-colors text-blue-700 hover:bg-blue-100"
          >
            Products
          </a>
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg font-semibold transition-colors text-blue-700 hover:bg-blue-100"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen 
          ? 'max-h-48 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <nav className="flex flex-col gap-1 py-2 border-t border-gray-200 mt-4 pt-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
            }}
            className="px-4 py-3 rounded-lg font-semibold transition-colors bg-blue-600 text-white shadow"
          >
            Home
          </a>
          <a
            href="/catalog"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
            }}
            className="px-4 py-3 rounded-lg font-semibold transition-colors text-blue-700 hover:bg-blue-100"
          >
            Products
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
            }}
            className="px-4 py-3 rounded-lg font-semibold transition-colors text-blue-700 hover:bg-blue-100"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Backdrop (optional - for closing menu when clicking outside) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;