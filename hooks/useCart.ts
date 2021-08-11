import { useCallback, useMemo, useState } from 'react';
import { CartItem, Product } from 'types';
import { DEFAULT_CURRENCY } from 'utils/constants';

export default function useCart(currencies: string[]) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [isOpen, setIsOpen] = useState(false);

  const constructCartItem = (item: CartItem, isAddition: boolean = true) => {
    return isAddition
      ? {
          ...item,
          quantity: item.quantity + 1,
        }
      : {
          ...item,
          quantity: item.quantity - 1,
        };
  };

  const handleSelectCurrency = ({ currentTarget }: React.ChangeEvent<HTMLSelectElement>) =>
    setCurrency(currentTarget.value);

  const toggleCartModal = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const addToCart = useCallback(
    (item: Product) => {
      const itemId = cartItems.findIndex((c) => c.id === item.id);

      itemId >= 0
        ? setCartItems([
            constructCartItem(cartItems[itemId]),
            ...cartItems.filter((_, id) => id !== itemId),
          ])
        : setCartItems([{ ...item, quantity: 1 }, ...cartItems]);
    },
    [cartItems],
  );

  const handleAddToCart = ({ id, title, price, image_url }: Product) => {
    addToCart({
      id,
      title,
      price,
      image_url,
    });
    !isOpen && toggleCartModal();
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(
    () => cartItems.reduce((acc, curr) => acc + curr.quantity, 0) || 0,
    [cartItems],
  );

  const clearCartItem = useCallback(
    (selectedId: number) => {
      const item = cartItems[selectedId];
      item.quantity > 1
        ? setCartItems([...cartItems.filter((_, id) => id !== selectedId)])
        : setCartItems(cartItems.filter((_, id) => id !== selectedId));
    },
    [cartItems],
  );

  const removeCartItem = useCallback(
    (selectedId: number) => {
      const item = cartItems[selectedId];
      item.quantity >= 1
        ? setCartItems([
            constructCartItem(item, false),
            ...cartItems.filter((_, id) => id !== selectedId),
          ])
        : setCartItems(cartItems.filter((_, id) => id !== selectedId));
    },
    [cartItems],
  );

  return {
    clearCartItem,
    removeCartItem,
    addToCart: handleAddToCart,
    cartItems,
    cartCount,
    clearCart,
    isOpen,
    toggleCartModal,
    currencies,
    currency,
    handleSelectCurrency,
  };
}
