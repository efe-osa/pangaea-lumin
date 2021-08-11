import Nav from 'components/Nav';
import ProductList from 'components/ProductList';
import useCart from 'hooks/useCart';
import CartProvider from 'provider/CartProvider';
import ProductsQueryProvider from 'provider/ProductsQueryProvider';
import React from 'react';
import globalStyles from 'styles/index.module.css';
import { PageProps } from 'types';

function Home({ currencies }: PageProps) {
  const cart = useCart(currencies);
  return (
    <div>
      <CartProvider {...cart} currencies={currencies}>
        <Nav />
      </CartProvider>
      <div className={globalStyles.appContainer}>
        <ProductsQueryProvider currency={cart.currency}>
          <ProductList currency={cart.currency} addToCart={cart.addToCart} />
        </ProductsQueryProvider>
      </div>
    </div>
  );
}

export default Home;
