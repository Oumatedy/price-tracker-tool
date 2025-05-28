import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navLink = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
        location.pathname === to
          ? 'bg-blue-600 text-white shadow'
          : 'text-blue-700 hover:bg-blue-100'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <span className="text-2xl font-bold text-blue-700">ShopHub</span>
      <nav className="flex gap-2">
        {navLink('/', 'Home')}
        {navLink('/catalog', 'Products')}
        {navLink('/contact', 'Contact')}
      </nav>
    </header>
  );
};

export default Header;
