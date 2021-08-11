import { createContext } from 'react';
import { CartContextType } from 'types';

export const CartContext = createContext<CartContextType>({
  cartCount: 0,
  isOpen: false,
  toggleCartModal: () => {},
  handleSelectCurrency: () => {},
  currency: '',
  currencies: [],
  cartItems: [],
  addToCart: () => {},
  clearCartItem: () => {},
  removeCartItem: () => {},
});

export default function CartProvider({
  children,
  ...cart
}: { children: React.ReactNode; currencies: string[] } & CartContextType) {
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
