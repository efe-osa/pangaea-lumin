import { cleanup, render, screen } from '@testing-library/react';
import { DEFAULT_CURRENCY } from 'utils/constants';
import renderCartProvider from '__testUtils__/cartProvider';
import CartList from './index';

afterEach(cleanup);

const props = {
  addToCart: jest.fn(),
  currency: DEFAULT_CURRENCY,
  currencies: [DEFAULT_CURRENCY],
  clearCartItem: jest.fn(),
  handleSelectCurrency: jest.fn(),
  removeCartItem: jest.fn(),
  cartItems: [
    {
      id: '2',
      title: 'Sample',
      price: 104.0,
      image_url: '/images/placeholder.png',
      quantity: 1,
    },
  ],
  cartCount: 2,
  clearCart: jest.fn(),
  isOpen: false,
  toggleCartModal: jest.fn(),
};

it('renders with values', async () => {
  render(renderCartProvider(<CartList />, props));
  expect(screen.getByTitle(/lumin-cart/i)).toBeInTheDocument();

  const cartItems = screen.getAllByTitle(/cart-item/i).length;
  expect(cartItems).toBe(props.cartItems.length);
});
