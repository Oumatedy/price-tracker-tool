# ShopHub Price Tracker Tool

A human-centered, joy-driven web app for retail shopkeepers to compare and track supplier prices, powered by AI and low-code tools. This app is a modern product listing and filtering interface built using **React (Vite)**, styled with **Tailwind CSS**, and powered by data from the public **[FakeStore API](https://fakestoreapi.com/products)**.


---

🔍 Features
🔎 Full-Text Search on product title and description

🏷️ Category Filter with dynamic category list

💰 Price Range Slider dynamically set from product data

⭐ Minimum Rating Filter

📊 Sort Options: by Name, Price, Rating, and Review Count (ascending/descending)

🔄 Reset Filters to view the full product catalog again

📈 Price Trend Indicators: Show if a product's price is rising, falling, or stable (demo logic)

🤖 AI Insights: Smart summaries about price trends, trending products, and supplier suggestions

📦 Product Catalog: Browse, search, and filter products by category, price, and rating

🔥 Trending Filters: Instantly view top-rated, most-reviewed, or best-priced products

💡 Responsive Grid Layout with image fallback for broken URLs

✨ Modern UI/UX: Clean, responsive design with smooth animations and hover effects

⚡ Rapid Prototyping: Built with React and Tailwind CSS for fast development

🌙 Beautiful Interface powered by Tailwind CSS


---
## Live demo 

https://pricetrackertool.netlify.app/


## Demo

![ShopHub Demo](./src/assets/demo.png)

## Getting Started

1. **Clone the repo:**
   ```
   git clone https://github.com/Oumatedy/price-tracker-tool.git
   cd price-tracker-tool
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your OpenAI API key:
     ```
     VITE_OPENAI_API_KEY=your_openai_key_here
     ```

4. **Run the app:**
   ```
   npm run dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

This will start your Vite-powered development server and open the app in your browser at [http://localhost:5173](http://localhost:5173) by default.
---

## 🧠 Tech Stack

| Tech              | Usage                                      |
| ----------------- | ------------------------------------------ |
| **React**         | Front-end JavaScript library               |
| **Vite**          | Build tool and development server          |
| **Tailwind**      | Utility-first CSS framework for styling    |
| **Lucide**        | Icon library for React (used for UI icons) |
| **FakeStore API** | Public API for mock product data           |

---

## 📂 Project Structure

```
.
├── src/
│   ├── components/
│   │   └── Prices.jsx     # Main UI and filtering logic
│   ├── utils/
│   │   └── data.js        # Fetches product data from FakeStore API
│   ├── App.jsx
│   ├── main.jsx
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json


## 🌐 API

### 📦 Source: [FakeStore API](https://fakestoreapi.com/)

All product data is fetched from:

```
https://fakestoreapi.com/products
```

Each product contains:

* `id`, `title`, `description`, `price`, `category`
* `image`
* `rating: { rate, count }`

---

## 🛠️ Utilities

* **Image fallback** if a product image fails to load
* **Memoized filters** using `useMemo` for performance
* **Responsive design** for desktop, tablet, and mobile screens

---

## 📸 Screenshots

| Filter & Search                                               | Product Cards                                                     | No Results                                                        |
| ------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| ![Filter](./src/assets/screenshot.png)                           | ![Product](./src/assets/screenshot.png)                             | ![No Result](./src/assets/screenshot.png)                        |

---

## 🔧 Future Improvements

* Add pagination or infinite scroll
* Add cart functionality
* Product detail modal or page
* Store filters in URL query params

---

## Customization

- To demo price trends, the app uses a simple function based on product ID. Replace with real price history for production.
- You can further enhance with audio cues, error handling, and charts.


## 📄 License

MIT License. Free to use and modify.

---

## 🙌 Acknowledgements

* [FakeStore API](https://fakestoreapi.com/) for mock e-commerce data
* [Lucide Icons](https://lucide.dev)
* [Tailwind CSS](https://tailwindcss.com)
* [Vite](https://vitejs.dev)

---

## Developer
This application has been developed by Tedy Ouma