import { useQuery } from '@apollo/client';
import { createContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_ALL_PRODUCTS } from 'resolvers/queries/product';
import { ProductContextType, ProductProviderType, ProductResponse } from 'types';

export const ProductContext = createContext<ProductContextType>({
  productsLoading: true,
  products: undefined,
});

function ProductsQueryProvider({ children, currency }: ProductProviderType) {
  const { data, error, loading } = useQuery<ProductResponse>(GET_ALL_PRODUCTS, {
    variables: { currency },
  });

  if (error) {
    toast('Error fetching products', { type: 'error' });
  }

  return (
    <ProductContext.Provider
      value={{
        products: data?.products ?? [],
        productsLoading: loading,
      }}
    >
      <>
        {children}
        <ToastContainer />
      </>
    </ProductContext.Provider>
  );
}
export default ProductsQueryProvider;
