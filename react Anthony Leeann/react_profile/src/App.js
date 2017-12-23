import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile.js';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: [
                {
                    name: "Leeann Ho",
                    age: 24,
                    food: ["turkey sandwhich", "ramen", "salmon", "eggs"],
                    image: ""
                },
                {
                    name: "Anthony Drew",
                    age: 25,
                    food: ["black beans", "cuban food", "tacos", "tortillas"],
                    image: ""
                }
            ]
        }
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
