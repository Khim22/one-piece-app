import React, { Component } from 'react';
import { Button } from 'grommet/components/Button'
import Plx from 'react-plx';

import logo from './image.png';
import './App.css';
import TitleBar from './components/titlebar';

class App extends Component {
  constructor(props) {
    super(props)
    this.mref = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Plx className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>One Piece App</code>
          </p>
          <Button
          label="One Piece"
          onClick={this.focus} />
        </Plx>
        <TitleBar refprop={this.mref} />
      </div>
    );
  }

  focus = () => {
    window.scrollTo({
      top: this.mref.current.offsetTop,
      behavior: "smooth"
    })
  }
}


export default App;
