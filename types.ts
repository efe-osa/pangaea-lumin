export type PageProps = {
  currencies: string[];
};

export type Product = {
  id: string;
  title: string;
  price: number;
  image_url: string;
};

export type CartItem = Product & {
  quantity: number;
};

export interface ProductResponse {
  products: Product[];
}

export type ProductContextType = {
  productsLoading: boolean;
  products?: Product[];
};

export type ProductProviderType = {
  children: React.ReactChild;
  currency: string;
};

export type CartContextType = {
  addToCart: (item: Product) => void;
  currency: string;
  currencies: string[];
  cartItems: CartItem[];
  cartCount: number;
  isOpen: boolean;
  toggleCartModal: () => void;
  clearCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  handleSelectCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
