export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'chicken' | 'rice' | 'sides' | 'drinks' | 'combos';
  image: string;
  popular?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Refuel Meal',
    description: '1pc Spicy Chicken, Jollof Rice, and a 35cl Drink.',
    price: 2500,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: '2',
    name: 'Citizen Meal',
    description: '2pcs Spicy Chicken with regular Chips and Coleslaw.',
    price: 3800,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: '3',
    name: 'Family Bucket',
    description: '8pcs Crispy Chicken, 2 Large Sides, and 1.5L Drink.',
    price: 12500,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c71f9867?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: '4',
    name: 'Spicy Fried Chicken',
    description: 'Our signature crunchy and spicy fried chicken piece.',
    price: 1200,
    category: 'chicken',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c8d08f58?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Jollof Rice Special',
    description: 'Authentic Nigerian Jollof rice prepared with love.',
    price: 1500,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1628294895950-9833889307c0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Fried Rice',
    description: 'Deliciously seasoned fried rice with veggies.',
    price: 1500,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1512058560366-cd24270083cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    name: 'Regular Chips',
    description: 'Golden crispy potato fries.',
    price: 1000,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    name: 'Moin Moin',
    description: 'Traditional steamed bean pudding.',
    price: 800,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '9',
    name: 'Coca-Cola 35cl',
    description: 'Ice cold refreshing soda.',
    price: 500,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
  },
];
