import Image from 'next/image';
import { CartContext } from 'provider/CartProvider';
import Placeholder from 'public/images/placeholder.png';
import React, { useContext } from 'react';
import { CartItem as TCartItem } from 'types';
import appendCurrency from 'utils/appendCurrency';
import keyDownListener from 'utils/keyDownListeners';
import styles from './cartItem.module.css';

interface Props {
  idx: number;
  item: TCartItem;
}

function CartItem({ idx, item }: Props) {
  const { image_url, title, price, quantity } = item;
  const { currency, clearCartItem, removeCartItem, addToCart } = useContext(CartContext);
  const removeItem = () => {
    removeCartItem(idx);
  };

  const addItem = () => {
    addToCart(item);
  };
  const clearItem = () => {
    clearCartItem(idx);
  };

  return (
    <div className={styles.cartItem}>
      <button
        onKeyDown={keyDownListener(clearCartItem)}
        onClick={clearItem}
        type="button"
        className={styles.clearBtn}
      >
        &times;
      </button>
      <div title="cart-item" className={styles.container}>
        <span>
          <span className={styles.itemTitle}>{title}</span>
          <span className={styles.quantity}>
            <span className={styles.cartTools}>
              <button
                className={styles.btn}
                type="button"
                onClick={removeItem}
                onKeyDown={keyDownListener(removeItem)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className={styles.btn}
                type="button"
                onClick={addItem}
                onKeyDown={keyDownListener(addItem)}
              >
                +
              </button>
            </span>

            <span className={styles.itemPrice}>{appendCurrency(price, currency)}</span>
          </span>
        </span>
        <Image
          alt={title}
          src={image_url || (Placeholder as unknown as string)}
          width="130"
          height="80"
          loading="lazy"
          layout="responsive"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </div>
  );
}

export default CartItem;
