import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Store } from 'lucide-react';

const Header = () => {
  const navLink = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg font-semibold transition-colors ${
          isActive
            ? 'bg-blue-600 text-white shadow'
            : 'text-blue-700 hover:bg-blue-100'
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <Store className="text-blue-700 w-8 h-8" />
        <span className="text-2xl font-bold text-blue-700">ShopHub</span>
      </Link>
      <nav className="flex gap-2">
        {navLink('/', 'Home')}
        {navLink('/catalog', 'Products')}
        {navLink('/contact', 'Contact')}
      </nav>
    </header>
  );
};

export default Header;
