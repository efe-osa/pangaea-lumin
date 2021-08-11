import Nav from 'components/Nav';
import useCart from 'hooks/useCart';
import CartProvider from 'provider/CartProvider';
import React from 'react';
import { PageProps } from 'types';

function Home({ currencies }: PageProps) {
  const cart = useCart(currencies);
  return (
    <div>
      <CartProvider {...cart} currencies={currencies}>
        <Nav />
      </CartProvider>
    </div>
  );
}

export default Home;
