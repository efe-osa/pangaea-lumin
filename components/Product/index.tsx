/* eslint-disable @next/next/no-img-element */
import Placeholder from 'public/images/placeholder.png';
import React from 'react';
import { Product } from 'types';
import appendCurrency from 'utils/appendCurrency';
import keyDownListener from 'utils/keyDownListeners';
import styles from './product.module.css';

interface Props {
  addToCart: (item: Product) => void;
  currency: string;
  product: Product;
}

function ProductItem({ product, currency, addToCart }: Props) {
  const { image_url, title, price } = product;
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <figure className={styles.product}>
      <img
        className={styles.productImg}
        src={image_url ? image_url : (Placeholder as unknown as string)}
        alt={title}
      />
      <figcaption className={styles.productCaption}>
        <p className={styles.productTitle}>{title}</p>
        <span className={styles.productPrice}>{appendCurrency(price, currency)}</span>
        <button
          type="button"
          onClick={handleAddToCart}
          onKeyDown={keyDownListener(handleAddToCart)}
          className={styles.cta}
        >
          Add to cart
        </button>
      </figcaption>
    </figure>
  );
}

export default ProductItem;
