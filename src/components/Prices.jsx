import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Star, DollarSign } from 'lucide-react';
import { getData } from '../utils/data';

const Prices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getData();
    setData(response);
  };

  // Get unique categories from data
  const categories = useMemo(() => {
    const cats = [...new Set(data.map(item => item.category))];
    return cats.sort();
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
      const matchesPrice = item.price >= priceRange.min && item.price <= priceRange.max;
      const matchesRating = item.rating.rate >= minRating;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
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
  }, [data, searchTerm, selectedCategory, priceRange, minRating, sortBy, sortOrder]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setPriceRange(actualPriceRange);
    setMinRating(0);
    setSortBy('name');
    setSortOrder('asc');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Catalog</h1>
        <p className="text-gray-600">Search and filter through {data.length} products</p>
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
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedData.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
            <div className="p-4">
              <div className="mb-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                {product.title}
              </h3>
              <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-gray-900 flex items-center">
                  <DollarSign className="w-4 h-4" />
                  {product.price}
                </span>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span>{product.rating.rate}</span>
                  <span className="ml-1">({product.rating.count})</span>
                </div>
              </div>
              {/* <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                View Details
              </button> */}
            </div>
          </div>
        ))}
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
    </div>
  );
};

export default Prices;