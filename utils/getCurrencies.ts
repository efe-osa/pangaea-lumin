import client from 'apolloClient';
import { GET_CURRENCIES } from 'resolvers/queries/currencies';

export default async function getProducts() {
  const { data, error } = await client.query<{ currency: string[] }>({
    query: GET_CURRENCIES,
  });

  return {
    data,
    error,
  };
}
