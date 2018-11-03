import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
const cosmos = require('@azure/cosmos');
const CosmosClient = require('@azure/cosmos').CosmosClient;
const config = require('./config');
const url = require('url');

class App extends Component {
  
  
  constructor() {
    super();
    this.state = {
      name: 'Cosmos DB'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Hello Cosmos DB - v2 JS SDK - Sample
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

module.exports = config;
