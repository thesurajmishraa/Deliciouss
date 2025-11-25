export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian: boolean;
  rating: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export enum Category {
  PIZZA = 'Pizzas',
  BURGER = 'Burgers',
  BIRYANI = 'Biryani',
  MOMOS = 'Momos',
  ROLLS = 'Rolls & Wraps',
  NORTH_INDIAN = 'North Indian',
  SOUTH_INDIAN = 'South Indian',
  CHINESE = 'Chinese',
  DESSERT = 'Desserts',
  BEVERAGE = 'Beverages',
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}
