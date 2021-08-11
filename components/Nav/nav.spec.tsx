import { cleanup, render, screen } from '@testing-library/react';
import { DEFAULT_CURRENCY } from 'utils/constants';
import renderCartProvider from '__testUtils__/cartProvider';
import Nav from './index';

afterEach(cleanup);

const props = {
  removeCartItem: jest.fn(),
  addToCart: jest.fn(),
  cartItems: [],
  cartCount: 2,
  clearCartItem: jest.fn(),
  currency: DEFAULT_CURRENCY,
  currencies: [DEFAULT_CURRENCY],
  handleSelectCurrency: jest.fn(),
  isOpen: false,
  toggleCartModal: jest.fn(),
};

describe('<Nav />', () => {
  it('renders the component', () => {
    render(renderCartProvider(<Nav />, props));
    expect(screen.getByAltText(/Lumin/i)).toBeInTheDocument();
  });

  it('shows the cart count ', () => {
    render(renderCartProvider(<Nav />, props));

    expect(screen.getByTitle('cart-counter')).toBeInTheDocument();
    expect(screen.getByTitle('cart-counter').textContent).toBe(props.cartCount.toString());
  });
});
