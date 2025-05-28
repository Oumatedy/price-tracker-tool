import React, { useRef } from 'react';
import { Star, DollarSign, Search } from 'lucide-react';

const Home = ({ onBrowse }) => {
  return (
    <div className="bg-[#f7fafd] min-h-screen pb-12">
      {/* Welcome Section */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-8">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4 animate-fade-in-down">
          Welcome to ShopHub
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in">
          Discover amazing products from our curated collection. Browse through categories,<br />
          compare prices, and find exactly what you're looking for.
        </p>
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200 animate-fade-in-up"
          onClick={onBrowse}
        >
          Browse Products &rarr;
        </button>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-4">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-200">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Star className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Quality Products</h3>
          <p className="text-gray-500 text-center">
            Carefully curated selection of high-quality products with verified ratings and reviews.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-200">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Best Prices</h3>
          <p className="text-gray-500 text-center">
            Competitive pricing across all categories with transparent pricing and no hidden fees.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all duration-200">
          <div className="bg-gradient-to-tr from-pink-400 to-purple-500 p-4 rounded-full mb-4">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-lg mb-2">Easy Search</h3>
          <p className="text-gray-500 text-center">
            Advanced filtering and search capabilities to help you find exactly what you need.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-blue-600 rounded-2xl py-12 px-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="mb-6 text-lg">
            Join thousands of satisfied customers who have found their perfect products with us.
          </p>
          <button
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 hover:scale-105 transition-all duration-200"
            onClick={onBrowse}
          >
            Explore Catalog &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
