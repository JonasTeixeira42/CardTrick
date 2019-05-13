import React, { Component } from 'react';
import '../css/App.css';
import CardTrick from './components/CardTrick';

class App extends Component {
  render() {
    return(
      <div className="container">
        <CardTrick />
      </div>
    )
  }
}

export default App;
