import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../constants';
import { useCart } from '../store';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'combos', name: 'Combos' },
  { id: 'chicken', name: 'Chicken' },
  { id: 'rice', name: 'Rice Meals' },
  { id: 'sides', name: 'Sides' },
  { id: 'drinks', name: 'Drinks' },
];

export const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem } = useCart();

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-4xl font-display font-black text-ink">Our Menu</h1>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for your favorite meal..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
            <Filter className="w-5 h-5 text-gray-400 shrink-0 mr-2" />
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="card group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-display font-bold text-ink leading-tight">{item.name}</h3>
                    <span className="font-display font-black text-primary shrink-0">₦{item.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-500 text-xs line-clamp-2 flex-grow">{item.description}</p>
                  <button 
                    onClick={() => addItem(item)}
                    className="btn-primary w-full py-2 text-sm mt-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24 space-y-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-display font-bold text-ink">No meals found</h3>
            <p className="text-gray-500">Try searching for something else or change the category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const CartPage = () => {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 space-y-6">
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-primary">
          <ShoppingCart className="w-12 h-12" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-display font-black text-ink">Your cart is empty</h2>
          <p className="text-gray-500">Looks like you haven't added any delicious meals yet.</p>
        </div>
        <Link to="/menu" className="btn-primary px-8">
          Start Ordering
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 mb-12">
        <Link to="/menu" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-4xl font-display font-black text-ink">Your Cart</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="card p-4 flex gap-4 sm:gap-6 items-center">
              <img 
                src={item.image} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0" 
                alt={item.name}
                referrerPolicy="no-referrer"
              />
              <div className="flex-grow space-y-1">
                <h3 className="font-display font-bold text-ink">{item.name}</h3>
                <p className="text-xs text-gray-500 line-clamp-1">{item.description}</p>
                <p className="text-primary font-black">₦{item.price.toLocaleString()}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-gray-400 hover:text-secondary transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="card p-8 space-y-6 sticky top-24">
            <h3 className="text-xl font-display font-black text-ink border-b pb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span>₦1,000</span>
              </div>
              <div className="flex justify-between text-ink font-black text-xl pt-4 border-t">
                <span>Total</span>
                <span className="text-primary">₦{(total + 1000).toLocaleString()}</span>
              </div>
            </div>
            <button className="btn-primary w-full py-4 text-lg">
              Proceed to Checkout
            </button>
            <p className="text-[10px] text-center text-gray-400">
              By proceeding, you agree to our Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
