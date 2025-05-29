import React, { useState } from 'react';
import { Store } from 'lucide-react';


const Registration = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    storeName: '',
    location: '',
    productsOrServices: '',
    phone: '',
  });
  const [agreeMailing, setAgreeMailing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.storeName ||
      !form.location ||
      !form.productsOrServices ||
      !form.phone
    ) {
      setError('All fields are required.');
      return;
    }
    setSuccess('Account created! Please check your email to verify.');
    setForm({
      name: '',
      email: '',
      password: '',
      storeName: '',
      location: '',
      productsOrServices: '',
      phone: '',
    });
    setAgreeMailing(false);
    setTimeout(() => {
      setSuccess('');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-blue-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-books.jpg')",
          filter: 'blur(6px) brightness(0.7)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Overlay for darkening */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" aria-hidden="true" />
      
      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Welcome Section */}
          <div className="text-white space-y-6 lg:pt-16">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                {/* <img src="/logo192.png" alt="ShopHub Logo" className="h-16 w-16 rounded-full shadow-lg mr-3" /> */}
                <Store className="h-16 w-16 text-white" />
                <h1 className="text-4xl font-extrabold text-white">ShopHub</h1>
              </div>
              <h2 className="text-2xl font-bold mb-4">Join the Smart Retail Revolution</h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Transform your retail business with AI-powered price intelligence. Compare suppliers, 
                track market trends, and make data-driven purchasing decisions that boost your profits.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Real-time Price Comparison</h3>
                  <p className="text-blue-100 text-sm">Compare prices across multiple suppliers instantly</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI-Powered Insights</h3>
                  <p className="text-blue-100 text-sm">Get intelligent recommendations for better purchasing decisions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Market Trend Analysis</h3>
                  <p className="text-blue-100 text-sm">Stay ahead with comprehensive market intelligence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-8 py-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Account</h2>
                <p className="text-gray-600 text-sm">Start your free trial today</p>
              </div>

              {/* Registration Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleInput}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition bg-blue-50/50"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleInput}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition bg-blue-50/50"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleInput}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition bg-blue-50/50"
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={form.password}
                  onChange={handleInput}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition bg-blue-50/50"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Store Name"
                    value={form.storeName}
                    onChange={handleInput}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition bg-blue-50/50"
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={form.location}
                    onChange={handleInput}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition bg-blue-50/50"
                    required
                  />
                </div>

                <textarea
                  name="productsOrServices"
                  placeholder="Products or Services (describe what you sell)"
                  value={form.productsOrServices}
                  onChange={handleInput}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition bg-blue-50/50 resize-none"
                  required
                />

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeMailing"
                    checked={agreeMailing}
                    onChange={e => setAgreeMailing(e.target.checked)}
                    className="mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="agreeMailing" className="text-sm text-gray-700 leading-5">
                    I agree to receive product updates, market insights, and promotional offers via email. 
                    You can unsubscribe at any time.
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                    {success}
                  </div>
                )}

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Create Account
                </button>
              </div>

              {/* Links */}
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Forgot Password?
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Back to Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;