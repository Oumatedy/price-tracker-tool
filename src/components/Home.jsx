import React, { useState } from 'react';
import { Star, DollarSign, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function RetailerAccountModal({
  show,
  onClose,
  form,
  setForm,
  agreeMailing,
  setAgreeMailing,
  error,
  success,
  onSubmit,
}) {
  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return show ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Create Retailer Account</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleInput} className="w-full border rounded px-3 py-2" required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleInput} className="w-full border rounded px-3 py-2" required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleInput} className="w-full border rounded px-3 py-2" required />
          <input type="text" name="storeName" placeholder="Store Name" value={form.storeName} onChange={handleInput} className="w-full border rounded px-3 py-2" required />
          <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleInput} className="w-full border rounded px-3 py-2" required />
          <input type="text" name="productsOrServices" placeholder="Products or Services" value={form.productsOrServices} onChange={handleInput} className="w-full border rounded px-3 py-2" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleInput} className="w-full border rounded px-3 py-2" required />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeMailing"
              checked={agreeMailing}
              onChange={e => setAgreeMailing(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="agreeMailing" className="text-sm text-gray-700">
              I agree to receive updates and offers via email.
            </label>
          </div>
          {error && <div className="text-red-600">{error}</div>}
          {success && <div className="text-green-600">{success}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

const Home = () => {
  const [showRetailerModal, setShowRetailerModal] = useState(false);
  const [retailerForm, setRetailerForm] = useState({
    name: '',
    email: '',
    password: '',
    storeName: '',
    location: '',
    productsOrServices: '',
    phone: '',
  });
  const [retailerAgreeMailing, setRetailerAgreeMailing] = useState(false);
  const [retailerError, setRetailerError] = useState('');
  const [retailerSuccess, setRetailerSuccess] = useState('');
  const navigate = useNavigate();

  const handleRetailerSubmit = (e) => {
    e.preventDefault();
    setRetailerError('');
    setRetailerSuccess('');
    if (
      !retailerForm.name ||
      !retailerForm.email ||
      !retailerForm.password ||
      !retailerForm.storeName ||
      !retailerForm.location ||
      !retailerForm.productsOrServices ||
      !retailerForm.phone
    ) {
      setRetailerError('All fields are required.');
      return;
    }
    setRetailerSuccess('Account created! Please check your email to verify.');
    setRetailerForm({
      name: '',
      email: '',
      password: '',
      storeName: '',
      location: '',
      productsOrServices: '',
      phone: '',
    });
    setRetailerAgreeMailing(false);
    setTimeout(() => setShowRetailerModal(false), 1500);
  };

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
          onClick={() => navigate('/catalog')}
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
            onClick={() => navigate('/catalog')}
          >
            Explore Catalog &rarr;
          </button>
        </div>
      </div>

      {/* Retailer Account Section */}
      <div className="w-full flex justify-center pt-8 pb-2">
        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-orange-600 transition-colors text-lg"
          onClick={() => navigate('/registration')}
        >
          Create Retailer Account
        </button>
      </div>
      <RetailerAccountModal
        show={showRetailerModal}
        onClose={() => setShowRetailerModal(false)}
        form={retailerForm}
        setForm={setRetailerForm}
        agreeMailing={retailerAgreeMailing}
        setAgreeMailing={setRetailerAgreeMailing}
        error={retailerError}
        success={retailerSuccess}
        onSubmit={handleRetailerSubmit}
      />
    </div>
  );
};

export default Home;
