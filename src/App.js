import React, { Component } from 'react';
import logo from './image.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>One Piece App</code>
          </p>
          <a href="#one-piece" className="button">One Piece</a>       
        </header>
      <TitleBar/>
      </div>
    );
  }
}

class TitleBar extends Component{
  render(){
    return (
      <h1 id="one-piece">One Piece</h1>
    );
  }
}

export default App;
