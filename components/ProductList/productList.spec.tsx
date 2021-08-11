import { cleanup, render, screen } from '@testing-library/react';
import { GET_ALL_PRODUCTS } from 'resolvers/queries/product';
import { Product } from 'types';
import { DEFAULT_CURRENCY } from 'utils/constants';
import renderProductsQueryProvider from '__testUtils__/productsQueryProvider';
import ProductList from './index';

const products = [
  { id: '1', image_url: '/public/images/placeholder.png', title: 'Sample', price: 101 },
];

const emptyMock = [
  {
    request: {
      query: GET_ALL_PRODUCTS,
      variables: {
        currency: DEFAULT_CURRENCY,
      },
    },
    result: {
      data: {
        products: [],
      },
      __typename: 'Product',
    },
  },
];

const mocks = [
  {
    request: {
      query: GET_ALL_PRODUCTS,
      variables: {
        currency: DEFAULT_CURRENCY,
      },
    },
    result: {
      data: {
        products,
      },
      __typename: 'Product',
    },
  },
];

const props: { products: Product[]; currency: string } = {
  products: [],
  currency: DEFAULT_CURRENCY,
};

afterEach(cleanup);

describe('<ProductList/>', () => {
  it('renders with no values', async () => {
    render(
      renderProductsQueryProvider(
        <ProductList currency={props.currency} addToCart={jest.fn} />,
        props,
        emptyMock,
      ),
    );

    expect(screen.getByTitle(/loader/i)).toBeInTheDocument();
    expect(await screen.findByText(/no products/i)).toBeInTheDocument();
  });

  it('renders with values', async () => {
    render(
      renderProductsQueryProvider(
        <ProductList currency={props.currency} addToCart={jest.fn} />,
        { ...props, ...products },
        mocks,
      ),
    );
    expect((await screen.findAllByTitle(/product-item/i)).length).toBe(products.length);
  });
});
