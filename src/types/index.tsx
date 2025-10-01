export interface Session {
  userId: string;
  isAuthenticated: boolean;
}

export type SizeVariants = "sm" | "md" | "lg" | "xl";
export interface Post {
  id: string;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  datetime: string;
  category: string;
  author: User;
}

export interface Reservation {
  id: string;
  title: string;
  host?: string;
  dateStart: number; // Epoch time
  dateEnd?: number; // Epoch time
  location: string;
  description?: string;
  price?: number; // USD price, undefined = free
  imageUrl?: string;
  status: ReservationStatus;
  type: "training" | "consultation" | "facility_booking";

  // Deprecate
  canAttend?: string;
  date: string; // e.g., "2025-10-05"
  time?: string; // e.g., "6:00 PM"
  timezone?: string; // e.g., "America/St_Thomas"

  place: string; // e.g., "UVI Innovation Lab, St. Thomas"

  //   chef?: Instructor[]; // minimal list of presenters

  // Event status and attendance
  maxAttendees?: number;
  currentAttendees?: number;
  registrationRequired?: boolean;
  registrationDeadline?: string; // e.g., "2025-10-03"
  resources?: Resource[];
}

export interface Resource {
  id: string;
  name: string;
  type: string; // person, space, equipment
  calendar?: Calendar;
  //   profile?: Profile;
}

export interface Calendar {
  id: string;
  name: string;
  // Get the rest from the google calendar api
}

export type ReservationStatus =
  | "scheduled"
  | "cancelled"
  | "completed"
  | "upcoming"
  | "ongoing";

/**
 * A user is any human that uses the platform. Users can be buyers, farmers, or both.
 * Users are able to create farms and purchase products from other farms.
 */
export interface User {
  id: string;
  email: string;
  username: string;
  name: string;
  handle: string;
  phone: string;
  website?: string;
  avatar?: string;
  phoneNumber?: string;
  address?: Address;
  userType?: UserType;
  isVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Profile {
  id: string;
  name: string;
  bio?: string;
  organization?: string;
  profession?: string;
  avatarUrl?: string;
  user?: User;
}
/**
 * User types for the two-sided marketplace
 */
export enum UserType {
  buyer = "customer",
  farmer = "chef",
  both = "both",
}

/**
 * Address information for users and farms
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

/**
 * Farm Qualifications
 */
export interface Qualification {
  id: string;
  name: string;
  issuingBody: string;
  issueDate: string;
  expiryDate?: string;
  certificateUrl?: string;
}

/**
 * Payment methods accepted by farms
 */
export enum PaymentMethod {
  CASH = "cash",
  CREDIT_CARD = "credit_card",
  DEBIT_CARD = "debit_card",
  PAYPAL = "paypal",
  VENMO = "venmo",
  BANK_TRANSFER = "bank_transfer",
  CHECK = "check",
}

/**
 * Product in the marketplace
 */

import { ProductCategory } from "./maybe";
export interface Product {
  id: string;
  cartId: string;
  chefId: string;
  farmId: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  unit: ProductUnit;
  quantityAvailable: number;
  minimumOrder?: number;
  images: string[];
  primaryImage: string;
  category: ProductCategory;
  subcategory?: string;
  tags: string[];
  nutritionalInfo?: NutritionalInfo;
  allergens?: string[];
  shelfLife?: number;
  isActive: boolean;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Units of measurement for products
 */
export enum ProductUnit {
  POUND = "lb",
  OUNCE = "oz",
  GRAM = "g",
  KILOGRAM = "kg",
  PIECE = "piece",
  EACH = "each",
  BUNCH = "bunch",
  HEAD = "head",
  DOZEN = "dozen",
  PINT = "pint",
  QUART = "quart",
  GALLON = "gallon",
  LITER = "liter",
  MILLILITER = "ml",
  BAG = "bag",
  BOX = "box",
  BASKET = "basket",
  CASE = "case",
}

/**
 * Nutritional information for products
 */
export interface NutritionalInfo {
  calories?: number;
  fat?: number;
  saturatedFat?: number;
  cholesterol?: number;
  sodium?: number;
  carbohydrates?: number;
  fiber?: number;
  sugar?: number;
  protein?: number;
  vitamins?: { [key: string]: string };
  minerals?: { [key: string]: string };
}

/**
 * Cart item with quantity and selections
 */
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unit: ProductUnit;
  priceAtTime: number;
  specialInstructions?: string;
  addedAt: string;
}

/**
 * Shopping cart for buyers
 */
export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax?: number;
  deliveryFee?: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Order status throughout the fulfillment process
 */
export enum OrderStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  PREPARING = "preparing",
  READY_FOR_PICKUP = "ready_for_pickup",
  OUT_FOR_DELIVERY = "out_for_delivery",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
  REFUNDED = "refunded",
}

/**
 * Order placed by a buyer
 */
export interface Order {
  id: string;
  buyerId: string;
  buyer: User;
  farmId: string;
  items: OrderItem[];
  status: OrderStatus;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  paymentMethod: PaymentMethod;
  deliveryOption: DeliveryOption;
  deliveryAddress?: Address;
  pickupTime?: string;
  deliveryTime?: string;
  specialInstructions?: string;
  orderNotes?: string;
  createdAt: string;
  updatedAt: string;
  estimatedFulfillmentTime?: string;
}

/**
 * Delivery options for farms
 */
export enum DeliveryOption {
  FARM_PICKUP = "farm_pickup",
  LOCAL_DELIVERY = "local_delivery",
  SHIPPING = "shipping",
  FARMERS_MARKET = "farmers_market",
}

/**
 * Individual item within an order
 */
export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  unit: ProductUnit;
  priceAtTime: number;
  subtotal: number;
}

/**
 * Review left by a buyer for a farm or product
 */
export interface Review {
  id: string;
  customerId: string;
  chefId: User;
  farmId: string;
  productId?: string;
  product?: Product;
  orderId: string;
  rating: number;
  title?: string;
  comment?: string;
  images?: string[];
  isVerifiedPurchase: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Search and filter parameters for marketplace
 */
export interface MarketQuery {
  search?: string;
  category?: ProductCategory;
  location?: string;
  radius?: number;
  priceMin?: number;
  priceMax?: number;
  inSeasonOnly?: boolean;
  availableOnly?: boolean;
  sortBy?: "price" | "distance" | "rating" | "newest" | "name";
  sortOrder?: "asc" | "desc";
  page?: number;
  pageSize?: number;
}

/**
 * Response from marketplace API
 */
export interface MarketResponse {
  products: Product[];
  chefs: Profile[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  appliedFilters: Omit<MarketQuery, "page" | "pageSize">;
}

/**
 * User authentication session
 */
export interface Session {
  isAuthenticated: boolean;
  user?: User;
  token?: string;
  expiresAt?: string;
}

/**
 * Notification for users
 */
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  createdAt: string;
}

/**
 * Types of notifications
 */
export enum NotificationType {
  ORDER_CONFIRMED = "order_confirmed",
  ORDER_READY = "order_ready",
  ORDER_DELIVERED = "order_delivered",
  PAYMENT_RECEIVED = "payment_received",
  REVIEW_RECEIVED = "review_received",
  PRODUCT_LOW_STOCK = "product_low_stock",
  SEASONAL_REMINDER = "seasonal_reminder",
  PROMOTION = "promotion",
  SYSTEM = "system",
}

// Legacy deprecated types - to be removed in future versions
// import * as dep from "./deprecated";
