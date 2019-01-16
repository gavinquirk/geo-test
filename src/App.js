import React, { Component } from 'react';
import './App.css';

import Layout from './containers/Layout/Layout'
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Navigation />
          <p>this is app</p>
        </Layout>
      </div>
    );
  }
}

export default App;
