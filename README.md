# 🛍️ Product Catalog Filter App

A modern product listing and filtering interface built using **React (Vite)**, styled with **Tailwind CSS**, and powered by data from the public **[FakeStore API](https://fakestoreapi.com/products)**.

## 🔍 Features

* 🔎 Full-text search on product title and description
* 🏷️ Category filter with dynamic category list
* 💰 Price range slider dynamically set from product data
* ⭐ Minimum rating filter
* 📊 Sort options: by Name, Price, Rating, and Review Count (ascending/descending)
* 🔄 Reset filters and see full product catalog again
* 💡 Responsive grid layout with image fallback for broken URLs
* 🌙 Beautiful UI powered by Tailwind CSS

---

## 🚀 Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/Oumatedy/price-tracker-tool.git
cd price-tracker-tool
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Start the development server**

```bash
npm run dev
```

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
```

---

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
