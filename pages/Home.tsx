import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, ShieldCheck, Tag } from 'lucide-react';
import { MENU_ITEMS, HERO_IMAGE, TESTIMONIALS } from '../constants';
import { Category } from '../types';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  // Get distinct categories
  const categories = Object.values(Category);
  
  // Get a few featured items (e.g., top rated)
  const featuredItems = MENU_ITEMS.filter(item => item.rating >= 4.7).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <img src={HERO_IMAGE} alt="Delicious Food" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Order Fresh & Hot Food Anytime. <br/> <span className="text-brand-500">From Anywhere.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Your favourite meals — pizzas, biryanis, burgers, momos, desserts — delivered lightning fast. Fresh. Fast. Delicious.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-700 transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Order Now <ArrowRight size={20} />
            </Link>
            <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition flex items-center justify-center">
              Explore Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Food Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat, idx) => {
               // Find an image for this category from menu items
               const catImage = MENU_ITEMS.find(i => i.category === cat)?.image || 'https://picsum.photos/200';
               return (
                <Link to={`/menu?category=${encodeURIComponent(cat)}`} key={idx} className="group relative rounded-xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all">
                  <img src={catImage} alt={cat} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <h3 className="text-white font-bold text-lg md:text-xl text-center px-2">{cat}</h3>
                  </div>
                </Link>
               );
            })}
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular This Week</h2>
              <p className="text-gray-500 mt-2">Top rated dishes by our customers</p>
            </div>
            <Link to="/menu" className="text-brand-600 font-semibold hover:text-brand-700 flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Delicious?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Superfast Delivery</h3>
              <p className="text-gray-600 text-sm">Food arrives hot and fresh — always on time.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
               <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Offers</h3>
              <p className="text-gray-600 text-sm">Cashbacks, discounts, and deal of the day.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Hygienic</h3>
              <p className="text-gray-600 text-sm">Partner restaurants follow strict hygiene standards.</p>
            </div>
             <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100">
               <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Tracking</h3>
              <p className="text-gray-600 text-sm">Know exactly where your food is at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Customer Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg relative">
                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-500 rotate-45"></div>
                <p className="text-lg italic mb-6">"{t.text}"</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                   {[...Array(t.rating)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
                </div>
                <h4 className="font-bold">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
