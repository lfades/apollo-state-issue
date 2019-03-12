import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const typeDefs = gql`
  type Query {
    count: Int!
  }
`;

const GET_COUNT = gql`
  query GetCount {
    count @client
  }
`;

const resolvers = {
  Query: {
    count() {
      throw new Error('Oh no!')
    }
  }
};

function initApollo() {
  const cache = new InMemoryCache({ freezeResults: true });

  return new ApolloClient({
    assumeImmutableResults: true,
    cache,
    typeDefs,
    resolvers
  });
}

class App extends Component {
  apollo = initApollo();

  render() {
    return (
      <ApolloProvider client={this.apollo}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Query query={GET_COUNT}>
              {({ loading, error, data }) => {
                console.log('GET_COUNT QUERY', { loading, error, data })
                if (loading) {
                  return <p>Loading GET_COUNT query</p>;
                }
                if (error) {
                  return <p>An error ocurred: {error.message}</p>;
                }
                return <p>Page ready</p>
              }}
            </Query>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
