import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, Filter, Star, DollarSign } from 'lucide-react';
import { getData } from '../utils/data';
import { getAIInsights } from '../utils/ai';
import { useNavigate } from 'react-router-dom';
import Registration from './Registration';

const Prices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [data, setData] = useState([]);
  const [aiInsights, setAIInsights] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);
  const [trending, setTrending] = useState('none');
  const [error, setError] = useState('');
  const [aiError, setAIError] = useState('');
  const aiSoundRef = useRef(null);
  const catalogRef = useRef(null);
  const [selectedSeller, setSelectedSeller] = useState('all');
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const navigate = useNavigate();

  // Add random sellers for demo
  const sellerNames = [
    'Acme Corp', 'BestMart', 'QuickShop', 'SuperDeals', 'MegaStore', 'ShopEase', 'ValueHub', 'PrimeGoods'
  ];

  function assignRandomSellers(products) {
    return products.map((item, idx) => ({
      ...item,
      seller: item.seller || sellerNames[idx % sellerNames.length]
    }));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setError('');
    try {
      let response = await getData();
      // Assign random sellers for demo
      response = assignRandomSellers(response);
      setData(response);
    } catch (e) {
      setError('Failed to load products. Please try again later.');
    }
  };

  // Get unique categories from data
  const categories = useMemo(() => {
    const cats = [...new Set(data.map(item => item.category))];
    return cats.sort();
  }, [data]);

  // Get unique sellers from data
  const sellers = useMemo(() => {
    const sellerList = [...new Set(data.map(item => item.seller || 'Unknown Seller'))];
    return sellerList.sort();
  }, [data]);

  // Get price range from data
  const actualPriceRange = useMemo(() => {
    if (data.length === 0) return { min: 0, max: 1000 };
    const prices = data.map(item => item.price);
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices))
    };
  }, [data]);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = data.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSeller = selectedSeller === 'all' || (item.seller || 'Unknown Seller') === selectedSeller;
      const matchesPrice = item.price >= priceRange.min && item.price <= priceRange.max;
      const matchesRating = item.rating.rate >= minRating;
      
      return matchesSearch && matchesCategory && matchesSeller && matchesPrice && matchesRating;
    });

    // Sort the filtered data
    filtered.sort((a, b) => {
      let aVal, bVal;
      
      switch (sortBy) {
        case 'name':
          aVal = a.title.toLowerCase();
          bVal = b.title.toLowerCase();
          break;
        case 'price':
          aVal = a.price;
          bVal = b.price;
          break;
        case 'rating':
          aVal = a.rating.rate;
          bVal = b.rating.rate;
          break;
        case 'reviews':
          aVal = a.rating.count;
          bVal = b.rating.count;
          break;
        default:
          return 0;
      }
      
      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    return filtered;
  }, [data, searchTerm, selectedCategory, selectedSeller, priceRange, minRating, sortBy, sortOrder]);

  // Trending filter logic
  const handleTrending = (type) => {
    setTrending(type);
    switch (type) {
      case 'top-rated':
        setSortBy('rating');
        setSortOrder('desc');
        setMinRating(4);
        break;
      case 'most-reviewed':
        setSortBy('reviews');
        setSortOrder('desc');
        setMinRating(0);
        break;
      case 'best-price':
        setSortBy('price');
        setSortOrder('asc');
        setMinRating(0);
        break;
      default:
        setSortBy('name');
        setSortOrder('asc');
        setMinRating(0);
        break;
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange(actualPriceRange);
    setMinRating(0);
    setSortBy('name');
    setSortOrder('asc');
    setTrending('none');
    setSelectedSeller('all');
  };

  // Helper to get demo price trend info
  function getPriceTrendDemo(product) {
    // Demo: Use product.id to generate a fake trend
    if (!product || typeof product.id !== "number") return null;
    const mod = product.id % 3;
    if (mod === 0) return { trend: 'up', color: 'text-red-500', icon: '▲' };
    if (mod === 1) return { trend: 'down', color: 'text-green-600', icon: '▼' };
    return { trend: 'flat', color: 'text-gray-400', icon: '▬' };
  }

  // Add/remove product from comparison
  const toggleCompare = (product) => {
    setSelectedForCompare(prev => {
      if (prev.find(p => p.id === product.id)) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const clearComparison = () => setSelectedForCompare([]);

  return (
    <div className="bg-[#f7fafd] min-h-screen">
      {/* Comparison Dashboard */}
      {selectedForCompare.length >= 2 && (
        <div className="max-w-5xl mx-auto mt-6 mb-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Product Comparison</h2>
            <button
              onClick={clearComparison}
              className="text-sm text-blue-600 hover:underline"
            >
              Clear Comparison
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr>
                  <th className="p-2 border"></th>
                  {selectedForCompare.map(product => (
                    <th key={product.id} className="p-2 border text-center">{product.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border font-semibold">Image</td>
                  {selectedForCompare.map(product => (
                    <td key={product.id} className="p-2 border text-center">
                      <img src={product.image} alt={product.title} className="h-16 mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Price</td>
                  {selectedForCompare.map(product => (
                    <td key={product.id} className="p-2 border text-center">${product.price}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Seller</td>
                  {selectedForCompare.map(product => (
                    <td key={product.id} className="p-2 border text-center">{product.seller}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Category</td>
                  {selectedForCompare.map(product => (
                    <td key={product.id} className="p-2 border text-center">{product.category}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Rating</td>
                  {selectedForCompare.map(product => (
                    <td key={product.id} className="p-2 border text-center">{product.rating.rate} ({product.rating.count})</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 border font-semibold">Description</td>
                  {selectedForCompare.map(product => (
                    <td key={product.id} className="p-2 border text-xs">{product.description}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Remove the Home Page Create Account Button here */}
      {/* <div className="w-full flex justify-center pt-8 pb-2">
        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold shadow hover:bg-orange-600 transition-colors text-lg"
          onClick={() => navigate('/registration')}
        >
          Create Retailer Account
        </button>
      </div> */}
      {/* ...existing code... */}
      <div ref={catalogRef} className="max-w-7xl mx-auto p-6">
        {/* Retailer Account Button (catalogue section) */}
        <div className="flex justify-end mb-4">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-orange-600 transition-colors"
            onClick={() => window.open('/registration', '_blank', 'noopener')}
          >
            Create Retailer Account
          </button>
        </div>
        {/* Remove the duplicate retailer account button here */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Catalog</h1>
          <p className="text-gray-600">Search and filter through {data.length} products</p>
        </div>

        {/* Trending Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${
              trending === 'top-rated'
                ? 'bg-orange-500 text-white border-orange-500 shadow'
                : 'bg-white text-orange-700 border-orange-300 hover:bg-orange-50 border-orange-300'
            }`}
            onClick={() => handleTrending('top-rated')}
          >
            <span role="img" aria-label="Top Rated">🔥</span> Top Rated
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${
              trending === 'most-reviewed'
                ? 'bg-blue-600 text-white border-blue-600 shadow'
                : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50 border-blue-300'
            }`}
            onClick={() => handleTrending('most-reviewed')}
          >
            <span role="img" aria-label="Most Reviewed">💬</span> Most Reviewed
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${
              trending === 'best-price'
                ? 'bg-green-600 text-white border-green-600 shadow'
                : 'bg-white text-green-700 border-green-300 hover:bg-green-50 border-green-300'
            }`}
            onClick={() => handleTrending('best-price')}
          >
            <span role="img" aria-label="Best Price">💸</span> Best Price
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold border transition-colors ${
              trending === 'none'
                ? 'bg-gray-200 text-gray-700 border-gray-200 shadow'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 border-gray-300'
            }`}
            onClick={() => handleTrending('none')}
          >
            Reset Trending
          </button>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-gray-950 pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-gray-950 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            {/* Seller Filter */}
            <select
              value={selectedSeller}
              onChange={e => setSelectedSeller(e.target.value)}
              className="text-gray-950 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Sellers</option>
              {sellers.map(seller => (
                <option key={seller} value={seller}>
                  {seller}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [sort, order] = e.target.value.split('-');
                setSortBy(sort);
                setSortOrder(order);
              }}
              className="text-gray-950 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low-High)</option>
              <option value="price-desc">Price (High-Low)</option>
              <option value="rating-desc">Rating (High-Low)</option>
              <option value="reviews-desc">Most Reviews</option>
            </select>

            {/* Reset Button */}
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-blue-600 text-black font-bold rounded-lg hover:bg-blue-700 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Reset Filters
            </button>
          </div>

          {/* Advanced Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${priceRange.min} - ${priceRange.max}
              </label>
              <div className="flex gap-2">
                <input
                  type="range"
                  min={actualPriceRange.min}
                  max={actualPriceRange.max}
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) }))}
                  className="flex-1"
                />
                <input
                  type="range"
                  min={actualPriceRange.min}
                  max={actualPriceRange.max}
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Minimum Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Rating: {minRating}+
              </label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedData.length} of {data.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
          {filteredAndSortedData.map(product => {
            // Use the demo trend function for every product card
            const trend = getPriceTrendDemo(product);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-200 overflow-hidden group animate-fade-in-up relative"
                tabIndex={0}
              >
                {/* Compare Checkbox */}
                <div className="absolute top-3 right-3 z-10">
                  <input
                    type="checkbox"
                    checked={!!selectedForCompare.find(p => p.id === product.id)}
                    onChange={() => toggleCompare(product)}
                    title="Add to comparison"
                    className="w-5 h-5 accent-blue-600"
                  />
                </div>
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    {/* Price Trend Indicator (Demo) */}
                    {(() => {
                      const trend = getPriceTrendDemo(product);
                      return trend && (
                        <span className={`flex items-center gap-1 text-xs font-semibold ${trend.color}`}>
                          {trend.icon}
                          <span className="ml-1">
                            {trend.trend === 'up' && 'Rising'}
                            {trend.trend === 'down' && 'Falling'}
                            {trend.trend === 'flat' && 'Stable'}
                          </span>
                        </span>
                      );
                    })()}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-base">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900 flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {product.price}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span>{product.rating.rate}</span>
                      <span className="ml-1">({product.rating.count})</span>
                    </div>
                  </div>
                  {/* Seller Info */}
                  <div className="text-xs text-gray-500 mt-1">
                    Seller: {product.seller || 'Unknown Seller'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredAndSortedData.length === 0 && (
          <div className="text-center py-12">
            <Filter className="mx-auto w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={resetFilters}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* AI Insights */}
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={async () => {
              setAIError('');
              setLoadingAI(true);
              try {
                const insights = await getAIInsights(filteredAndSortedData);
                setAIInsights(insights);
                // Play audio cue when AI insights are ready
                if (aiSoundRef.current) {
                  aiSoundRef.current.currentTime = 0;
                  aiSoundRef.current.play();
                }
              } catch (e) {
                setAIError('Failed to get AI insights. Please try again.');
              }
              setLoadingAI(false);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            disabled={loadingAI}
          >
            {loadingAI ? "Analyzing..." : "Get AI Insights"}
          </button>
          {/* Audio cue for AI Insights */}
          <audio ref={aiSoundRef} src="/notification.mp3" preload="auto" />
          {aiError && (
            <div className="text-red-600 font-semibold">{aiError}</div>
          )}
          {aiInsights && (
            <div className="bg-white p-4 rounded shadow max-w-xl">
              <h2 className="font-bold mb-2">AI Insights</h2>
              <pre className="whitespace-pre-wrap text-sm">{aiInsights}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;
