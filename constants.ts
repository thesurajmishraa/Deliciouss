import { Category, MenuItem, Testimonial } from './types';

export const HERO_IMAGE = "https://picsum.photos/seed/delicious-hero/1920/1080";

export const MENU_ITEMS: MenuItem[] = [
  // Pizzas
  { id: 'p1', name: 'Margherita Pizza', description: 'Soft base, fresh cheese, basil.', price: 299, category: Category.PIZZA, image: 'https://picsum.photos/seed/pizza1/400/300', isVegetarian: true, rating: 4.5 },
  { id: 'p2', name: 'Farmhouse Pizza', description: 'Loaded with onion, capsicum, tomato & mushroom.', price: 399, category: Category.PIZZA, image: 'https://picsum.photos/seed/pizza2/400/300', isVegetarian: true, rating: 4.7 },
  { id: 'p3', name: 'Chicken Pepperoni', description: 'Classic pepperoni with extra cheese.', price: 499, category: Category.PIZZA, image: 'https://picsum.photos/seed/pizza3/400/300', isVegetarian: false, rating: 4.8 },
  { id: 'p4', name: 'Paneer Tikka Pizza', description: 'Spicy tandoori paneer toppings.', price: 349, category: Category.PIZZA, image: 'https://picsum.photos/seed/pizza4/400/300', isVegetarian: true, rating: 4.6 },
  
  // Burgers
  { id: 'b1', name: 'Classic Veg Burger', description: 'Crispy patty with lettuce and mayo.', price: 149, category: Category.BURGER, image: 'https://picsum.photos/seed/burger1/400/300', isVegetarian: true, rating: 4.2 },
  { id: 'b2', name: 'Crispy Chicken Burger', description: 'Fried chicken fillet with spicy sauce.', price: 199, category: Category.BURGER, image: 'https://picsum.photos/seed/burger2/400/300', isVegetarian: false, rating: 4.5 },
  { id: 'b3', name: 'Double Cheese Burger', description: 'Two patties, double cheese.', price: 249, category: Category.BURGER, image: 'https://picsum.photos/seed/burger3/400/300', isVegetarian: false, rating: 4.9 },

  // Biryani
  { id: 'bi1', name: 'Hyderabadi Chicken Biryani', description: 'Aromatic basmati rice with tender chicken.', price: 349, category: Category.BIRYANI, image: 'https://picsum.photos/seed/biryani1/400/300', isVegetarian: false, rating: 4.8 },
  { id: 'bi2', name: 'Kolkata Mutton Biryani', description: 'Traditional style with egg and potato.', price: 449, category: Category.BIRYANI, image: 'https://picsum.photos/seed/biryani2/400/300', isVegetarian: false, rating: 4.9 },
  { id: 'bi3', name: 'Paneer Biryani', description: 'Spiced paneer cubes layered with rice.', price: 299, category: Category.BIRYANI, image: 'https://picsum.photos/seed/biryani3/400/300', isVegetarian: true, rating: 4.4 },

  // Momos
  { id: 'm1', name: 'Veg Steam Momos', description: 'Delicate dumplings filled with veggies.', price: 129, category: Category.MOMOS, image: 'https://picsum.photos/seed/momo1/400/300', isVegetarian: true, rating: 4.3 },
  { id: 'm2', name: 'Chicken Fried Momos', description: 'Crispy fried momos with spicy chutney.', price: 169, category: Category.MOMOS, image: 'https://picsum.photos/seed/momo2/400/300', isVegetarian: false, rating: 4.6 },

  // North Indian
  { id: 'ni1', name: 'Butter Chicken', description: 'Rich tomato gravy with tandoori chicken.', price: 399, category: Category.NORTH_INDIAN, image: 'https://picsum.photos/seed/ni1/400/300', isVegetarian: false, rating: 4.9 },
  { id: 'ni2', name: 'Dal Makhani', description: 'Slow cooked black lentils with cream.', price: 299, category: Category.NORTH_INDIAN, image: 'https://picsum.photos/seed/ni2/400/300', isVegetarian: true, rating: 4.8 },

  // South Indian
  { id: 'si1', name: 'Masala Dosa', description: 'Crispy crepe filled with potato masala.', price: 149, category: Category.SOUTH_INDIAN, image: 'https://picsum.photos/seed/si1/400/300', isVegetarian: true, rating: 4.7 },
  { id: 'si2', name: 'Idli Sambhar', description: 'Steamed rice cakes with lentil soup.', price: 99, category: Category.SOUTH_INDIAN, image: 'https://picsum.photos/seed/si2/400/300', isVegetarian: true, rating: 4.5 },

  // Chinese
  { id: 'c1', name: 'Hakka Noodles', description: 'Stir fried noodles with veggies.', price: 199, category: Category.CHINESE, image: 'https://picsum.photos/seed/chin1/400/300', isVegetarian: true, rating: 4.4 },
  { id: 'c2', name: 'Chilli Chicken', description: 'Spicy chicken tossed with peppers.', price: 249, category: Category.CHINESE, image: 'https://picsum.photos/seed/chin2/400/300', isVegetarian: false, rating: 4.6 },

  // Desserts
  { id: 'd1', name: 'Choco Lava Cake', description: 'Molten chocolate center.', price: 129, category: Category.DESSERT, image: 'https://picsum.photos/seed/dessert1/400/300', isVegetarian: true, rating: 4.9 },
  { id: 'd2', name: 'Gulab Jamun', description: 'Soft milk dumplings in sugar syrup.', price: 99, category: Category.DESSERT, image: 'https://picsum.photos/seed/dessert2/400/300', isVegetarian: true, rating: 4.8 },

  // Beverages
  { id: 'bev1', name: 'Cold Coffee', description: 'Chilled coffee with ice cream.', price: 149, category: Category.BEVERAGE, image: 'https://picsum.photos/seed/bev1/400/300', isVegetarian: true, rating: 4.7 },
  { id: 'bev2', name: 'Mojito', description: 'Refreshing mint and lime drink.', price: 129, category: Category.BEVERAGE, image: 'https://picsum.photos/seed/bev2/400/300', isVegetarian: true, rating: 4.5 },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Rahul S.", text: "Great speed, hot food, awesome app UI. Love Delicious!", rating: 5 },
  { id: 2, name: "Priya M.", text: "Best offers. Saved so much money this month.", rating: 5 },
  { id: 3, name: "Amit K.", text: "Amazing menu categories, everything is easy to find.", rating: 4 },
];
