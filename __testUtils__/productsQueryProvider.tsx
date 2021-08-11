import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import ProductsProvider from 'provider/ProductsQueryProvider';
import { ProductProviderType } from 'types';

export default function renderProductQueryProvider(
  Component: React.ReactElement,
  props: Omit<ProductProviderType, 'children'>,
  mocks?: MockedResponse<Record<string, unknown>>[],
) {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <ProductsProvider {...props}>{Component}</ProductsProvider>
    </MockedProvider>
  );
}
