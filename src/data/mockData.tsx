import {
  Product,
  User,
  UserType,
  ProductUnit,
  Cart
} from '@/types';
import { ProductCategory as PC } from '@/types/maybe';

// Mock Commercial Kitchens Data
export interface CommercialKitchen {
  id: string;
  name: string;
  description: string;
  location: string;
  address: string;
  hourlyRate: number;
  images: string[];
  amenities: string[];
  availableHours: string[];
  maxCapacity: number;
  rating: number;
  reviews: number;
  ownerId: string;
}

export const mockKitchens: CommercialKitchen[] = [
  {
    id: '1',
    name: 'Metro Kitchen Co',
    description: 'Modern commercial kitchen with state-of-the-art equipment',
    location: 'Downtown',
    address: '123 Kitchen St, City, ST 12345',
    hourlyRate: 45,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
    ],
    amenities: ['Industrial ovens', 'Walk-in cooler', 'Prep stations', 'Dishwasher'],
    availableHours: ['6AM-10AM', '2PM-6PM', '8PM-12AM'],
    maxCapacity: 8,
    rating: 4.8,
    reviews: 23,
    ownerId: 'kitchen-owner-1'
  },
  {
    id: '2',
    name: 'Culinary Hub',
    description: 'Shared kitchen space perfect for food startups and catering',
    location: 'Midtown',
    address: '456 Chef Ave, City, ST 12345',
    hourlyRate: 35,
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'
    ],
    amenities: ['Gas ranges', 'Large prep tables', 'Storage lockers', 'Loading dock'],
    availableHours: ['7AM-11AM', '1PM-5PM', '7PM-11PM'],
    maxCapacity: 6,
    rating: 4.5,
    reviews: 18,
    ownerId: 'kitchen-owner-2'
  },
  {
    id: '3',
    name: 'The Kitchen Collective',
    description: 'Premium kitchen with specialized equipment for artisan food production',
    location: 'Arts District',
    address: '789 Artisan Blvd, City, ST 12345',
    hourlyRate: 65,
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
    ],
    amenities: ['Wood-fired oven', 'Pastry station', 'Vacuum chamber', 'Cold storage'],
    availableHours: ['5AM-9AM', '12PM-4PM', '6PM-10PM'],
    maxCapacity: 4,
    rating: 4.9,
    reviews: 31,
    ownerId: 'kitchen-owner-3'
  }
];

// Mock Kitchen Reservations
export interface KitchenReservation {
  id: string;
  kitchenId: string;
  chefId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  totalCost: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  purpose: string;
  createdAt: string;
}

export const mockReservations: KitchenReservation[] = [
  {
    id: 'res-1',
    kitchenId: '1',
    chefId: 'chef-1',
    date: '2025-01-15',
    startTime: '6:00 AM',
    endTime: '10:00 AM',
    totalHours: 4,
    totalCost: 180,
    status: 'confirmed',
    purpose: 'Meal prep for weekly catering orders',
    createdAt: '2025-01-10'
  },
  {
    id: 'res-2',
    kitchenId: '2',
    chefId: 'chef-2',
    date: '2025-01-16',
    startTime: '2:00 PM',
    endTime: '6:00 PM',
    totalHours: 4,
    totalCost: 140,
    status: 'pending',
    purpose: 'Testing new recipes for restaurant launch',
    createdAt: '2025-01-12'
  }
];

// Mock Chefs Data
export const mockChefs: User[] = [
  {
    id: 'chef-1',
    email: 'maria@example.com',
    username: 'chefsolutions',
    name: 'Chef Maria Rodriguez',
    handle: '@chefsolutions',
    phone: '555-0123',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
    userType: UserType.farmer,
    isVerified: true,
    socialMedia: {
      instagram: '@chefsolutions',
      facebook: 'Chef Solutions'
    }
  },
  {
    id: 'chef-2',
    email: 'david@example.com',
    username: 'artisanbites',
    name: 'Chef David Kim',
    handle: '@artisanbites',
    phone: '555-0124',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    userType: UserType.farmer,
    isVerified: true,
    socialMedia: {
      instagram: '@artisanbites'
    }
  },
  {
    id: 'chef-3',
    email: 'sarah@example.com',
    username: 'healthyeats',
    name: 'Chef Sarah Johnson',
    handle: '@healthyeats',
    phone: '555-0125',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6106db8?w=400',
    userType: UserType.farmer,
    isVerified: true,
    socialMedia: {
      instagram: '@healthyeats',
      facebook: 'Healthy Eats Kitchen'
    }
  }
];

// Mock Products Data
export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    cartId: 'cart-1',
    chefId: 'chef-1',
    farmId: 'chef-1',
    name: 'Gourmet Lasagna Tray',
    description: 'Handcrafted lasagna with layers of fresh pasta, ricotta, and house-made marinara sauce. Feeds 4-6 people.',
    price: 28.99,
    quantity: 1,
    unit: ProductUnit.EACH,
    quantityAvailable: 12,
    minimumOrder: 1,
    images: [
      'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800'
    ],
    primaryImage: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800',
    category: PC.PREPARED_FOODS,
    tags: ['Italian', 'Family Size', 'Freezer Friendly'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    shelfLife: 5,
    isActive: true,
    featured: true,
    createdAt: '2025-01-10',
    updatedAt: '2025-01-10'
  },
  {
    id: 'prod-2',
    cartId: 'cart-2',
    chefId: 'chef-2',
    farmId: 'chef-2',
    name: 'Artisan Sourdough Bread',
    description: 'Traditional sourdough bread made with wild yeast starter. Perfect crusty exterior with soft, tangy interior.',
    price: 8.50,
    quantity: 1,
    unit: ProductUnit.EACH,
    quantityAvailable: 25,
    minimumOrder: 1,
    images: [
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800',
      'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800'
    ],
    primaryImage: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800',
    category: PC.BAKED_GOODS,
    tags: ['Artisan', 'Sourdough', 'Traditional'],
    allergens: ['Gluten'],
    shelfLife: 3,
    isActive: true,
    featured: true,
    createdAt: '2025-01-09',
    updatedAt: '2025-01-09'
  },
  {
    id: 'prod-3',
    cartId: 'cart-3',
    chefId: 'chef-3',
    farmId: 'chef-3',
    name: 'Quinoa Power Bowl',
    description: 'Nutrient-packed bowl with quinoa, roasted vegetables, avocado, and tahini dressing. Vegan and gluten-free.',
    price: 14.99,
    quantity: 1,
    unit: ProductUnit.EACH,
    quantityAvailable: 18,
    minimumOrder: 1,
    images: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800'
    ],
    primaryImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    category: PC.PREPARED_FOODS,
    tags: ['Vegan', 'Gluten-Free', 'Healthy', 'Bowl'],
    allergens: ['Sesame'],
    shelfLife: 3,
    isActive: true,
    featured: false,
    createdAt: '2025-01-08',
    updatedAt: '2025-01-08'
  },
  {
    id: 'prod-4',
    cartId: 'cart-4',
    chefId: 'chef-1',
    farmId: 'chef-1',
    name: 'House-Made Pasta Sauce',
    description: 'Rich marinara sauce simmered with San Marzano tomatoes, fresh basil, and Italian herbs.',
    price: 9.99,
    quantity: 1,
    unit: ProductUnit.EACH,
    quantityAvailable: 30,
    minimumOrder: 1,
    images: [
      'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=800'
    ],
    primaryImage: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=800',
    category: PC.CONDIMENTS_SAUCES,
    tags: ['Italian', 'Traditional', 'Sauce'],
    allergens: [],
    shelfLife: 14,
    isActive: true,
    featured: false,
    createdAt: '2025-01-07',
    updatedAt: '2025-01-07'
  },
  {
    id: 'prod-5',
    cartId: 'cart-5',
    chefId: 'chef-2',
    farmId: 'chef-2',
    name: 'Croissant Box (6 pack)',
    description: 'Buttery, flaky croissants baked fresh daily using French technique. Perfect for breakfast or brunch.',
    price: 16.99,
    quantity: 1,
    unit: ProductUnit.BOX,
    quantityAvailable: 8,
    minimumOrder: 1,
    images: [
      'https://images.unsplash.com/photo-1555507036-ab794f576c8a?w=800'
    ],
    primaryImage: 'https://images.unsplash.com/photo-1555507036-ab794f576c8a?w=800',
    category: PC.BAKED_GOODS,
    tags: ['French', 'Pastry', 'Breakfast', 'Box'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    shelfLife: 2,
    isActive: true,
    featured: true,
    createdAt: '2025-01-06',
    updatedAt: '2025-01-06'
  }
];

// Mock Customers Data
export const mockCustomers: User[] = [
  {
    id: 'customer-1',
    email: 'john@example.com',
    username: 'johnfoodie',
    name: 'John Smith',
    handle: '@johnfoodie',
    phone: '555-0200',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    userType: UserType.buyer,
    isVerified: true
  },
  {
    id: 'customer-2',
    email: 'jane@example.com',
    username: 'janeats',
    name: 'Jane Doe',
    handle: '@janeats',
    phone: '555-0201',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6106db8?w=400',
    userType: UserType.buyer,
    isVerified: true
  }
];

// Mock Cart Data
export const mockCart: Cart = {
  id: 'cart-customer-1',
  userId: 'customer-1',
  items: [
    {
      id: 'cart-item-1',
      productId: 'prod-1',
      product: mockProducts[0],
      quantity: 1,
      unit: ProductUnit.EACH,
      priceAtTime: 28.99,
      addedAt: '2025-01-10'
    },
    {
      id: 'cart-item-2',
      productId: 'prod-2',
      product: mockProducts[1],
      quantity: 2,
      unit: ProductUnit.EACH,
      priceAtTime: 8.50,
      addedAt: '2025-01-10'
    }
  ],
  totalItems: 3,
  subtotal: 45.99,
  tax: 3.68,
  deliveryFee: 5.99,
  total: 55.66,
  createdAt: '2025-01-10',
  updatedAt: '2025-01-10'
};