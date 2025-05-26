
---

# 🛒 ShopHub Price Tracker Tool

A human-centered, joy-driven web app for retail shopkeepers to **compare and track supplier prices**, powered by **AI** and **low-code tools**.

Built with **React (Vite)**, styled using **Tailwind CSS**, and driven by the public **[FakeStore API](https://fakestoreapi.com/products)**.

---

## 🚀 Features

* 🔎 **Full-Text Search** across product titles and descriptions
* 🏷️ **Dynamic Category Filters** for precision browsing
* 💰 **Live Price Slider** auto-ranged based on product data
* ⭐ **Rating Filter** to find top-reviewed products
* 📊 **Multi-Sort Options**: Name, Price, Rating, Reviews (asc/desc)
* 🔄 **Reset Filters** to restore default view
* 📈 **Price Trend Indicators** (simulated logic by product ID)
* 🤖 **AI Insights**: Summaries of trends, top products & supplier suggestions (requires OpenAI API key)
* 🔥 **Trending Filters**: Top-rated, Most-reviewed, Lowest-priced
* 📦 **Interactive Catalog** with real-time filtering
* 💡 **Responsive UI Grid** with graceful image fallbacks
* ✨ **Modern UX** with animations and hover states
* ⚡ **Rapid Prototyping Ready** using Vite + Tailwind + React

---

## 🌐 Live Demo

🔗 [Launch on Netlify](https://pricetrackertool.netlify.app/)

---

## 📸 Demo

![ShopHub Demo](./src/assets/demo.png)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Oumatedy/price-tracker-tool.git
cd price-tracker-tool
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file at the root:

```env
VITE_OPENAI_API_KEY=your_openai_key_here
```

### 4. Run the App

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧠 Tech Stack

| Technology        | Purpose                                  |
| ----------------- | ---------------------------------------- |
| **React**         | Component-based UI development           |
| **Vite**          | Fast bundling & hot-reloading dev server |
| **Tailwind CSS**  | Utility-first styling                    |
| **Lucide Icons**  | Clean, lightweight icon components       |
| **FakeStore API** | Product data: titles, prices, ratings    |

---

## 📂 Project Structure

```
.
├── src/
│   ├── components/
│   │   └── Prices.jsx         # UI + filtering logic
│   ├── utils/
│   │   └── data.js            # API fetching logic
│   ├── assets/
│   │   └── demo.png           # Screenshot
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

**Base Endpoint:**

```
https://fakestoreapi.com/products
```

**Each product includes:**

* `id`, `title`, `description`, `price`, `category`
* `image`, `rating: { rate, count }`

---

## 🧰 Utilities & Enhancements

* ✅ **Image Fallbacks** for broken product images
* ⚙️ **Memoized Filters** with `useMemo` for performance
* 📱 **Mobile-Responsive** design across screen sizes

---

## 📸 Screenshots

| Filter & Search                  | Product Cards                     | No Results                          |
| -------------------------------- | --------------------------------- | ----------------------------------- |
| ![Filter](./src/assets/demo.png) | ![Product](./src/assets/demo.png) | ![No Result](./src/assets/demo.png) |

---

## 🚧 Future Improvements

* 📄 Product detail modal or page
* ➕ Cart & wishlist features
* 🔁 Pagination or infinite scrolling
* 🔗 Store filters in the URL (deep linking)

---

## ⚙️ Customization Notes

* 💡 Price trends are simulated via product ID logic — replace with real price history as needed.
* 🎨 Add enhancements like error boundaries, loading skeletons, or chart-based insights.
* 🔊 Optional: Add sound feedback for key interactions.

---

## 📜 License

Licensed under the **MIT License** — free to use, modify, and share.

---

## 🙌 Acknowledgements

* [FakeStore API](https://fakestoreapi.com/) – Mock product data
* [Lucide Icons](https://lucide.dev) – Icon library
* [Tailwind CSS](https://tailwindcss.com) – Utility-first CSS
* [Vite](https://vitejs.dev) – Lightning-fast dev tooling

---

## 👤 Developer

Built with ❤️ by **Tedy Ouma**
🔗 [GitHub](https://github.com/Oumatedy)

---
