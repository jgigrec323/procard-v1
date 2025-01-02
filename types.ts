// Types generated based on your Prisma schema

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: string;
  cards?: Card[];
  orders?: Order[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export enum CardType {
  BLACK = "BLACK",
  GOLD = "GOLD",
  SILVER = "SILVER",
  WHITE = "WHITE",
}

export interface Card {
  id: string;
  type: CardType;
  status: string;
  isActivated: boolean;
  activationDate?: Date;
  linkedUserId: string;
  linkedUser: User;
  uniqueURL: string;
  content?: CardContent;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  user: User;
  phone: string;
  shippingAddress?: string;
  orderItems?: OrderItem[];
  isPaid: boolean;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  order: Order;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  isFeatured: boolean;
  isArchived: boolean;
  colorId: string;
  color: Color;
  orderItems?: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CardContent {
  id: string;
  cardId: string;
  card: Card;
  content: Record<string, unknown>; // JSON content associated with the card
  createdAt: Date;
  updatedAt: Date;
}

export enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface Color {
  id: string;
  name: string;
  value: string;
  products?: Product[];
  createdAt: Date;
  updatedAt: Date;
}
