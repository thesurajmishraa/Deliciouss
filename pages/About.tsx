import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Delivering happiness through food — quickly, safely, and affordably.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Delicious is an online food ordering platform built for speed, comfort, and taste. 
            We partner with top restaurants to bring every cuisine to your doorstep. 
            Whether you are craving a cheesy pizza, a spicy biryani, or a comforting dessert, we have it all.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/about1/600/400" alt="Our Team" className="rounded-2xl shadow-lg" />
          </div>
          <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
             <p className="text-gray-600 leading-relaxed mb-4">
               Started in India, Delicious became a platform focused on smooth user experience, 
               reliable delivery, and a massive menu network — just like Zomato but more personalized and user-friendly.
             </p>
             <p className="text-gray-600 leading-relaxed">
               We realized that people don't just want food; they want an experience. A promise that their meal will arrive hot, fresh, and exactly when they need it.
             </p>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {['Trust', 'Quality', 'Speed', 'Hygiene', 'Innovation'].map((val) => (
              <div key={val} className="p-6 bg-brand-50 rounded-xl text-brand-700 font-bold border border-brand-100 hover:shadow-md transition">
                {val}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
