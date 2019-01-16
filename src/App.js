import React, { Component } from 'react';
import './App.css';

import Layout from './containers/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>this is app</p>
        </Layout>
      </div>
    );
  }
}

export default App;
