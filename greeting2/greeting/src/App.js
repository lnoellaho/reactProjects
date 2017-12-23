import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './greeting.js'
import Input from './input.js'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props)
        this.state= {
            greeting: "Leeann"
        }
    }
    updateGreeting(event) {
        this.setState({greeting: event})
    }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <div>
                <Greeting name={this.state.greeting}/>
            </div>
            <div>
                <Input greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
