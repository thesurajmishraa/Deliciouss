import React from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../App';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, addToCart, clearCart } = useCart();
  
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md pointer-events-auto">
          <div className="h-full flex flex-col bg-white shadow-xl animate-slide-in-right">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 bg-gray-50 border-b border-gray-100 sm:px-6">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-brand-600" />
                <h2 className="text-lg font-medium text-gray-900">Your Cart</h2>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close panel</span>
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="Empty Cart" className="w-48 opacity-50 mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty.</p>
                  <button onClick={onClose} className="mt-4 text-brand-600 font-medium hover:underline">
                    Browse Menu
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li key={item.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">₹{item.price * item.quantity}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{item.isVegetarian ? 'Veg' : 'Non-veg'}</p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 hover:bg-gray-100 text-gray-600"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-2 font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => addToCart(item)}
                              className="p-1 hover:bg-gray-100 text-brand-600"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6 bg-gray-50">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>₹{totalAmount}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
                <button
                  onClick={() => alert("Checkout functionality would be implemented here!")}
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-brand-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-700 transition"
                >
                  Checkout <ArrowRight size={18} className="ml-2" />
                </button>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <button onClick={onClose} className="font-medium text-brand-600 hover:text-brand-500">
                    Continue Shopping &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
