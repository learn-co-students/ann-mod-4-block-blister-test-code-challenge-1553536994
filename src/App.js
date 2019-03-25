import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'

class App extends Component {
  render() {
    return (
      <div className="bg-light">
        <header className="bg-info shadow p-3 mb-5 rounded">
          <h1 className="text-center">Block Blister</h1>
        </header>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
