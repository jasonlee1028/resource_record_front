import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import {createClient} from '../services/graphql';
import config from '../api/graphql';

export default class RootApolloProvider extends Component {
  constructor(props) {
    super(props);
    console.log("graphqlEndpoint:", config.graphqlEndpoint);
    this.state = {
      client: createClient(config.graphqlEndpoint, this.authCallback, this.errorCallback)
    };
  }
  
  authCallback = (token) => {
    // do what you want
  };
  
  errorCallback = (statusCode) => {
    switch (statusCode) {
      case 401:
        console.log("got 401 networkError! force login!");
        this.props.toggleLoginRenderType('Login');
        break;
      case 500:
        console.log("got 500 networkError! suggest retry!");
        break;
      default:
        console.log("Unhandled networkError statusCode:", statusCode);
    }
  };

  render () {
    var props = this.props;
    // console.log('root',this.state.client)
    let client = this.state.client;
    return (
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    );
  }
}
