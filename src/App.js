import React from 'react';
import './App.css';
import { FlashLight } from './components/flashLight';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <FlashLight/>
        </header>
      </div>
    );
  }
}

export default App;
