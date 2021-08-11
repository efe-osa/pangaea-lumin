import { ApolloProvider } from '@apollo/client';
import client from 'apolloClient';
import Home from 'components/Home';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { PageProps } from 'types';
import { DEFAULT_CURRENCY } from 'utils/constants';
import getCurrencies from 'utils/getCurrencies';

const IndexPage: NextPage<PageProps> = ({ currencies }) => {
  return (
    <main>
      <Head>
        <title>Products | Lumin</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="Buy your body care products on Lumin online store"></meta>
      </Head>

      <ApolloProvider client={client}>
        <Home currencies={currencies} />
      </ApolloProvider>
    </main>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const { data, error } = await getCurrencies();
  return {
    props: {
      currencies: error ? [DEFAULT_CURRENCY] : data.currency,
    },
  };
}
