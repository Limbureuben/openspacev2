import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { environment } from '../environments/environment';

export function createApollo() {
  return new ApolloClient({
    link: new HttpLink({ uri: 'http://127.0.0.1:8000/graphql/' }), // Update with your Django GraphQL URL
    cache: new InMemoryCache(),
  });
}

export const apolloProvider = {
  provide: APOLLO_OPTIONS,
  useFactory: createApollo,
};
