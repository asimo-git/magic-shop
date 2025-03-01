export interface Product {
  id: number;
  img: string;
  name: string;
  price: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
