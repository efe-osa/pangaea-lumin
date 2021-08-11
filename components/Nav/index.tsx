import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from 'provider/CartProvider';
import Cart from 'public/icons/shopping-cart.svg';
import Logo from 'public/images/logo.png';
import React, { useContext } from 'react';
import keyDownListener from 'utils/keyDownListeners';
import styles from './nav.module.css';

const CartModal = dynamic(() => import('components/CartList'));

function Nav() {
  const { cartCount, isOpen, toggleCartModal } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <section className={styles.nav}>
        <Link href="/" passHref={true}>
          <a>
            <Image
              src={Logo}
              alt="Lumin"
              width="163"
              height="44"
              layout="fixed"
              objectFit="contain"
            />
          </a>
        </Link>
        <div className={styles.tools}>
          <Link href="/" passHref={true}>
            <a className={styles.account}>Account</a>
          </Link>
          <button
            onKeyDown={keyDownListener(toggleCartModal)}
            onClick={toggleCartModal}
            className={styles.cartBtn}
            type="button"
            title="shopping-cart"
            aria-label="View cart"
          >
            <Cart />
            {cartCount > 0 ? (
              <span title="cart-counter" className={styles.cartCounter}>
                {cartCount}
              </span>
            ) : null}
          </button>
        </div>
      </section>
      {isOpen ? <CartModal /> : null}
    </header>
  );
}

export default Nav;
