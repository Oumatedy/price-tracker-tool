import React, { useState } from 'react';

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
      window.close();
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-blue-100">
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
      {/* Registration Card */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="bg-white/95 rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center">
          {/* Logo and Title */}
          <img src="/logo192.png" alt="ShopHub Logo" className="h-14 w-14 mb-3 rounded-full shadow" />
          <h2 className="text-2xl font-extrabold text-blue-700 mb-1">ShopHub</h2>
          <p className="text-blue-500 font-semibold mb-2">Retailer Registration</p>
          <p className="text-gray-500 text-sm mb-4 text-center">
            Join ShopHub to compare, track, and analyze supplier prices in real time. Make smarter purchases and stay ahead in the market with AI-powered insights.
          </p>
          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleInput}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInput}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleInput}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
              required
            />
            <input
              type="text"
              name="storeName"
              placeholder="Store Name"
              value={form.storeName}
              onChange={handleInput}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleInput}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
              required
            />
            <input
              type="text"
              name="productsOrServices"
              placeholder="Products or Services"
              value={form.productsOrServices}
              onChange={handleInput}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleInput}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
              required
            />
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
            {error && <div className="text-red-600 text-sm">{error}</div>}
            {success && <div className="text-green-600 text-sm">{success}</div>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors text-lg"
            >
              Sign Up
            </button>
          </form>
          {/* Links */}
          <div className="flex justify-between w-full mt-4 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
            <a href="#" className="text-blue-600 hover:underline">Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
