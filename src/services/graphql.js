import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

//load组件 用户操作缺数据
export const mutationHandler = function(
  mutationFn,
  mutationName,
  validDataCallback,
  invalidDataCallback,
  errorCallback
) {
  if (typeof mutationFn !== 'function') {
    console.error('mutationFn is not function!');
  }

  mutationFn()
    .then(data => {
      if (
        !data ||
        !data.data ||
        !data.data[`${mutationName}`] ||
        data.error ||
        data.errors
      ) {
        console.error('invalid data', mutationName, data);
        console.error(
          'data.error or data.errors',
          mutationName,
          data.error,
          data.errors
        );
        invalidDataCallback(data);
        return;
      }

      validDataCallback(data);
    })
    .catch(e => {
      console.error('Caught error:', e);
      let { graphQLErrors, networkError, ...rest } = e;
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }

      console.error('rest errors:', rest);

      errorCallback(graphQLErrors || networkError);
    });
};

export const exampleValidDataCallback = function(data) {
  console.log('graphql valid data:', data);
};

export const exampleInvalidDataCallback = function(data) {
  console.log('graphql invalid data:', data);
};

export const exampleErrorCallback = function(err) {
  console.log('graphql err', err);
};

export const createClient = function(uri, authCallback, errorCallback) {
  const httpLink = new HttpLink({ uri: uri, credentials: 'include' });
  const cache = new InMemoryCache({
    dataIdFromObject: object => object.id || object.key
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');

    authCallback(token);

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers
        // 'x-http-header-session': token ? `${token}` : "",
      }
    };
  });

  const apolloErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, path: ${path}`
        )
      );
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
      errorCallback(networkError.statusCode);
    }
  });

  return new ApolloClient({
    link: ApolloLink.from([apolloErrorLink, authLink, httpLink]),
    cache: new InMemoryCache({
      addTypename: false
    })
  });
};
