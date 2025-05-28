import React, { useState } from 'react';

const BusinessCard = () => (
  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl shadow-xl p-10 w-full max-w-md mx-auto md:mx-0 flex flex-col items-center">
    <img
      src="/logo192.png"
      alt="ShopHub Logo"
      className="w-24 h-24 rounded-full border-4 border-white shadow mb-4 bg-white object-contain"
    />
    <h3 className="text-2xl font-extrabold mb-2 tracking-tight">ShopHub</h3>
    <p className="text-blue-100 mb-2 text-lg font-semibold">Your Smart Price Tracker</p>
    <p className="text-sm mb-4 text-blue-200 text-center">
      ShopHub empowers retail shopkeepers to compare, track, and analyze supplier prices in real time. Make smarter purchases and stay ahead in the market with AI-powered insights and a beautiful, easy-to-use interface.
    </p>
    <div className="flex flex-col items-center gap-1 mb-3">
      <span className="text-white font-semibold">Contact</span>
      <a
        href="mailto:support@shophub.com"
        className="text-white hover:underline text-sm"
      >
        support@shophub.com
      </a>
      <span className="text-blue-200 text-xs">Nairobi, Kenya</span>
    </div>
    <div className="flex gap-3 mt-2">
      <a href="https://github.com/Oumatedy/price-tracker-tool" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
      </a>
      <a href="https://shophub.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8 0-1.657.672-3.156 1.758-4.242l10.484 10.484A7.963 7.963 0 0 1 12 20zm6.242-3.758L7.758 5.758A7.963 7.963 0 0 1 12 4c4.418 0 8 3.582 8 8 0 1.657-.672 3.156-1.758 4.242z"/></svg>
      </a>
    </div>
    <div className="mt-6 text-xs text-blue-100 text-center">
      <span className="font-semibold">Business Hours:</span> Mon - Sat, 8:00am - 6:00pm <br />
      <span className="font-semibold">Support:</span> Live chat available in-app
    </div>
  </div>
);

const ContactCard = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
    // For demo: no backend, just show success
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-[80vh] bg-gradient-to-br from-blue-200 via-purple-100 to-blue-50 py-12 gap-8">
      <BusinessCard />
      <div className="w-full max-w-lg">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full border border-blue-200 transition-all duration-300 hover:shadow-blue-200">
          <h2 className="text-3xl font-extrabold text-blue-700 mb-2 text-center tracking-tight">Contact Us</h2>
          <p className="text-gray-500 mb-6 text-center">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-blue-50"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none bg-blue-50"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 rounded-xl shadow hover:from-blue-700 hover:to-purple-700 transition-all text-lg"
              disabled={sent}
            >
              {sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
          {sent && (
            <div className="mt-6 text-green-600 text-center font-semibold animate-fade-in-up text-lg">
              Thank you for reaching out!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
