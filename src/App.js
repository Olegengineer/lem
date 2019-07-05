import React, { Component } from 'react';
import './App.css';

import Wellcome from './components/wellcome/index';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <Wellcome />
        </header>
      </div>
    );
  }
}

export default App;
