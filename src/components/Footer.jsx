import React from 'react';

const Footer = () => (
  <footer className="bg-white border-t mt-12 py-6 text-center text-gray-500 text-sm relative">
    &copy; {new Date().getFullYear()} ShopHub. All rights reserved.
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors z-50"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  </footer>
);

export default Footer;
