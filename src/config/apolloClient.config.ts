import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';

import { IS_DEV } from '../constants/app';

const publicLink = ApolloLink.from([
  // @ts-ignore
  createHttpLink({
    // @ts-ignore
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  }),
]);

export const cache = new InMemoryCache({
  addTypename: false,
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export const client = () =>
  new ApolloClient({
    connectToDevTools: IS_DEV,
    link: ApolloLink.split(
      (operation) => operation.getContext().clientType === 'public',
      publicLink
    ),
    cache,
    // @ts-ignore
    defaultOptions,
  });
