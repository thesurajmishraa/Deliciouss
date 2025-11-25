import React from 'react';
import { MenuItem } from '../types';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../App';

interface ProductCardProps {
  item: MenuItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
          <span className="text-xs font-bold">{item.rating}</span>
          <Star size={10} className="fill-yellow-400 text-yellow-400" />
        </div>
        {item.isVegetarian ? (
          <div className="absolute top-2 left-2 border border-green-600 bg-white p-0.5 rounded-sm" title="Vegetarian">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          </div>
        ) : (
          <div className="absolute top-2 left-2 border border-red-600 bg-white p-0.5 rounded-sm" title="Non-Vegetarian">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-lg truncate">{item.name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2 h-10">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-lg">₹{item.price}</span>
          <button 
            onClick={() => addToCart(item)}
            className="flex items-center gap-1 bg-white text-brand-600 border border-brand-200 hover:bg-brand-50 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors"
          >
            ADD <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
