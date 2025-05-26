
---

# 🛒 ShopHub Price Tracker Tool

A human-centered, joy-driven web app for retail shopkeepers to **compare and track supplier prices**, powered by **AI** and **low-code tools**.
Built with **React (Vite)**, styled using **Tailwind CSS**, and powered by the public **[FakeStore API](https://fakestoreapi.com/products)**.

---

## 🚀 Features

* 🔎 **Full-Text Search** on product titles and descriptions
* 🏷️ **Dynamic Category Filters** for precise browsing
* 💰 **Auto-Ranged Price Slider** powered by live product data
* ⭐ **Minimum Rating Filter** to surface best-reviewed products
* 📊 **Multi-Sort Options**: Name, Price, Rating, and Review Count (asc/desc)
* 🔄 **Reset Filters** to quickly return to full catalog view
* 📈 **Price Trend Indicators** (demo logic based on product ID)
* 🤖 **AI Insights**: Summaries for price trends, top products & supplier suggestions
* 🔥 **Trending Filters**: Top-rated, most-reviewed, and lowest-priced product views
* 📦 **Interactive Product Catalog** with fast filtering and browsing
* 💡 **Responsive Grid UI** with fallback for broken image URLs
* ✨ **Modern UI/UX** with animations and hover effects
* ⚡ **Rapid Prototyping Ready**: Built using Vite + React + Tailwind

---

## 🌐 Live Demo

🔗 [Try the App on Netlify](https://pricetrackertool.netlify.app/)

---

## 📸 Demo

![ShopHub Demo](./src/assets/demo.png)

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Oumatedy/price-tracker-tool.git
cd price-tracker-tool
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_OPENAI_API_KEY=your_openai_key_here
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open in browser

Navigate to: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Tech Stack

| Tech              | Purpose                                  |
| ----------------- | ---------------------------------------- |
| **React**         | UI development                           |
| **Vite**          | Lightweight bundler & dev server         |
| **Tailwind CSS**  | Utility-first styling                    |
| **Lucide Icons**  | Icon components for clean UI             |
| **FakeStore API** | Mock product data (titles, prices, etc.) |

---

## 📂 Project Structure

```
.
├── src/
│   ├── components/
│   │   └── Prices.jsx         # Main filtering & UI logic
│   ├── utils/
│   │   └── data.js            # Data fetching from FakeStore API
│   ├── assets/
│   │   └── demo.png           # Screenshot for demo
│   ├── App.jsx
│   ├── main.jsx
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 📡 API Usage

**Endpoint:**

```
https://fakestoreapi.com/products
```

**Each product object includes:**

* `id`, `title`, `description`, `price`, `category`
* `image`
* `rating: { rate, count }`

---

## 🧰 Utilities & Enhancements

* ✅ **Image Fallbacks** for missing/broken product images
* ⚙️ **Memoized Filters** using `useMemo` for performance
* 📱 **Mobile-Responsive** design: optimized for all screen sizes

---

## 📸 Screenshots

| Filter & Search                  | Product Cards                     | No Results                          |
| -------------------------------- | --------------------------------- | ----------------------------------- |
| ![Filter](./src/assets/demo.png) | ![Product](./src/assets/demo.png) | ![No Result](./src/assets/demo.png) |

---

## 🚧 Future Improvements

* 📄 Add product detail modal or page
* ➕ Add cart & wishlist functionality
* 🔁 Pagination or infinite scrolling
* 🔗 Store filters in URL query parameters

---

## ⚙️ Customization Tips

* 💡 Price trends are currently simulated via a function based on product ID — easily replaceable with real price history logic.
* 🎨 Enhance further with error boundaries, loading skeletons, and data visualizations.
* 🔊 Optional: Add audio feedback for filter actions for improved UX.

---

## 📜 License

This project is licensed under the **MIT License** — free to use, customize, and distribute.

---

## 🙌 Acknowledgements

* [FakeStore API](https://fakestoreapi.com/) – E-commerce mock data
* [Lucide Icons](https://lucide.dev) – Beautiful open-source icons
* [Tailwind CSS](https://tailwindcss.com) – Rapid UI development
* [Vite](https://vitejs.dev) – Fast frontend tooling

---

## 👤 Developer

Built with ❤️ by **Tedy Ouma**
🔗 [GitHub Profile](https://github.com/Oumatedy)

---

