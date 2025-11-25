import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-brand-500 mb-4">Delicious.</h3>
            <p className="text-gray-400 text-sm">
              Your favourite meals — pizzas, biryanis, burgers, momos — delivered lightning fast. Fresh. Fast. Delicious.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-brand-500 transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-brand-500 transition">Menu</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Linkedin size={20} /></a>
            </div>
            <p className="mt-4 text-gray-500 text-xs">
              © {new Date().getFullYear()} Delicious. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
