//all imprts from other components
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import GreetingInput from './input.js';
import BadRobot from './badrobot.js';
import GoodRobot from './goodrobot.js';
import KanyeBot5000 from './kanyebot5000.js';

class App extends Component {
    constructor(props){
        super(props)
        this.state= {
            greeting:""
        }
    }
    updateGreeting(greeting){
        this.setState({greeting: greeting})
    }

  render() {
    return (
      <div className="App">
        <Header/>
        <div>
        <GreetingInput value={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)}/>
        </div>
        <GoodRobot whatever={this.state.greeting} />
        <BadRobot whatever={this.state.greeting}/>
        <KanyeBot5000 whatever={this.state.greeting}/>
      </div>
    );
  }
}

export default App;
