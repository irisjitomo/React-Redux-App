import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import Jokes from './components/Jokes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>You wanna laugh for a bit?</h1>
      </header>
      <br></br>
      <div>
        <br></br>
        <Jokes />
      </div>
    </div>
  );
}



export default App;
