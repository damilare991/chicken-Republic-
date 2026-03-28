import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import { useCart } from '../store';

export const Home = () => {
  const { addItem } = useCart();
  const popularItems = MENU_ITEMS.filter(item => item.popular);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-white pt-12 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now Delivering Nationwide!
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black leading-[1.1] text-ink">
                Delicious, Affordable <br />
                <span className="text-primary">Chicken</span> — Delivered Fast
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Experience the crunchiest, tastiest fried chicken in Nigeria. Freshly prepared, pocket-friendly, and delivered to your doorstep in minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link to="/menu" className="btn-primary w-full sm:w-auto text-lg px-10">
                  Order Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/locations" className="btn-secondary w-full sm:w-auto text-lg px-10">
                  Find a Location
                </Link>
              </div>
              <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      className="w-10 h-10 rounded-full border-2 border-white" 
                      alt="User"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-accent">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-500 font-medium">50k+ Happy Customers</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=80" 
                alt="Fried Chicken Bucket"
                className="w-full h-auto animate-float drop-shadow-2xl rounded-3xl"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Delivery Time</p>
                  <p className="text-lg font-display font-black text-ink">25 - 35 Mins</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Order Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-black text-ink">Popular Meals</h2>
            <p className="text-gray-500 max-w-md">Our customers' favorites. Hand-picked for the ultimate satisfaction.</p>
          </div>
          <Link to="/menu" className="text-primary font-bold flex items-center gap-2 hover:underline">
            View Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  Selling Fast 🔥
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-display font-bold text-ink">{item.name}</h3>
                  <span className="text-xl font-display font-black text-primary">₦{item.price.toLocaleString()}</span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                <button 
                  onClick={() => addItem(item)}
                  className="btn-primary w-full py-2.5 text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-ink py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-black">Why Crispy Hub?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just sell chicken; we serve happiness with every bite.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: "Freshly Prepared", desc: "Always fresh, never frozen. Quality you can taste." },
              { icon: Clock, title: "Fast Delivery", desc: "Hot and fresh to your door in record time." },
              { icon: MapPin, title: "Nationwide", desc: "Over 50 branches across Nigeria and counting." },
              { icon: Star, title: "Best Value", desc: "Delicious meals that won't break your bank." }
            ].map((benefit, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-display font-bold">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <span className="bg-accent text-ink px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Limited Time Offer</span>
              <h2 className="text-5xl font-display font-black leading-tight">
                Get 20% Off Your <br /> First Online Order!
              </h2>
              <p className="text-white/80 text-lg">
                Use code <span className="bg-white/20 px-3 py-1 rounded font-mono font-bold text-white">CRISPY20</span> at checkout.
              </p>
              <Link to="/menu" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Claim Offer Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1569058242253-92a9c71f9867?auto=format&fit=crop&w=800&q=80" 
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                alt="Promo"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Push */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
              className="rounded-3xl shadow-xl"
              alt="Mobile App"
              referrerPolicy="no-referrer"
             />
           </div>
           <div className="space-y-8 order-1 lg:order-2">
             <h2 className="text-4xl font-display font-black text-ink">Order Faster with Our App</h2>
             <p className="text-gray-500 text-lg">
               Download the Crispy Hub app for exclusive deals, loyalty points, and faster checkout. Available on iOS and Android.
             </p>
             <div className="flex flex-wrap gap-4">
               <button className="bg-ink text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors border border-white/10">
                 <Smartphone className="w-6 h-6" />
                 <div className="text-left">
                   <p className="text-[10px] uppercase font-bold text-gray-400">Download on the</p>
                   <p className="text-sm font-bold">App Store</p>
                 </div>
               </button>
               <button className="bg-ink text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors border border-white/10">
                 <Smartphone className="w-6 h-6" />
                 <div className="text-left">
                   <p className="text-[10px] uppercase font-bold text-gray-400">Get it on</p>
                   <p className="text-sm font-bold">Google Play</p>
                 </div>
               </button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};
