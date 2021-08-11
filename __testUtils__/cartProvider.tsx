import CartProvider from 'provider/CartProvider';
import { CartContextType } from 'types';

export default function renderCartProvider(
  Component: React.ReactElement,
  props: CartContextType & { currencies: string[] },
) {
  return <CartProvider {...props}>{Component}</CartProvider>;
}
