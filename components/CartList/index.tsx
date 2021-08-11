import CartItem from 'components/CartItem';
import { CartContext } from 'provider/CartProvider';
import ArrowRight from 'public/icons/arrow-right.svg';
import React, { useContext } from 'react';
import appendCurrency from 'utils/appendCurrency';
import keyDownListener from 'utils/keyDownListeners';
import styles from './cartList.module.css';

function CartModal() {
  const { cartItems, currencies, handleSelectCurrency, currency, toggleCartModal } =
    useContext(CartContext);
  const total = React.useMemo(() => {
    let acc = 0;
    cartItems.forEach((i) => (acc += Number(i.price)));
    return acc;
  }, [cartItems]);

  return (
    <div className={styles.cartModalOverlay}>
      <section title="lumin-cart" aria-modal className={styles.cartModal}>
        <div className={styles.cartHeader}>
          <h1 className={styles.header}>Your cart</h1>
          <button
            onClick={toggleCartModal}
            onKeyDown={keyDownListener(toggleCartModal)}
            aria-label="close-modal"
            type="button"
            className={styles.cartCloseBtn}
          >
            <ArrowRight />
          </button>
          <select
            className={styles.cartCurrency}
            onChange={handleSelectCurrency}
            name="select-currencies"
            id="currencies"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <section title="cart-list" className={styles.cartBody}>
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <React.Fragment key={item.title}>
                <CartItem idx={idx} item={item} />
              </React.Fragment>
            ))
          ) : (
            <p className={styles.emptyCart}>There are no items in your cart.</p>
          )}
        </section>
        <section className={styles.subtotalContainer}>
          <span className={styles.subtotalText}>Subtotal</span>
          <span>{appendCurrency(total, currency)}</span>
        </section>
        <section className={styles.actionButtons}>
          <button type="button" className={styles.subscriptionBtn}>
            Make this a subscription (Save 20%)
          </button>
          <button type="submit" className={styles.checkoutBtn}>
            Proceed to checkout
          </button>
        </section>
      </section>
    </div>
  );
}

export default CartModal;
