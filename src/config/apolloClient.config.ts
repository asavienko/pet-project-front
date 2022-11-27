import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';

import { IS_DEV } from '../constants/app';
import { getToken } from '../utils/token';

const cache = new InMemoryCache();
const publicLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
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

const authLink = new ApolloLink((operation, forward) => {
  const token = getToken();

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

export const client = () =>
  new ApolloClient({
    connectToDevTools: IS_DEV,
    // TODO  add required event callback: onError
    // @ts-ignore
    link: authLink.concat(publicLink),
    cache,
    // @ts-ignore
    defaultOptions,
  });
