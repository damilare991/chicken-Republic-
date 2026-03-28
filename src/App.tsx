import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './components/Home';
import { MenuPage, CartPage } from './components/Menu';
import { LoyaltyPage } from './components/Loyalty';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/rewards" element={<LoyaltyPage />} />
            <Route path="/locations" element={<div className="py-24 text-center font-display font-bold text-3xl">Locations Page Coming Soon</div>} />
            <Route path="/about" element={<div className="py-24 text-center font-display font-bold text-3xl">About Us Page Coming Soon</div>} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm">
          <a href="/menu" className="btn-primary w-full py-4 shadow-2xl shadow-primary/40">
            Order Now - Fast Delivery
          </a>
        </div>
      </div>
    </Router>
  );
}

