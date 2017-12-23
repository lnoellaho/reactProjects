import React, { Component } from 'react';
import logo from './images/Pinwheel.png';
import './App.css';
import Hobby from './Content.js';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            team: [
                {
                    name: "Sharon",
                    hobby: "Pool",
                    image: "https://cdn.mashreghnews.ir/d/2017/05/13/4/1936186.jpg",
                    list: [
                        "Honduras",
                        "Costa Rica",
                        "Las Vegas"
                    ]
                },
                {
                    name: "Christina",
                    list: [
                        "Bali",
                        "Portugal",
                        "St. Moritz"
                    ],
                    image: "http://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/08/Snowboarding-Beginners-Tips-Advice-UK.jpg"
                }
            ]
        }
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="AboutUs">About Us</h1>
        </header>
        <p className="Lorem Ipsum">
            "Lick arm hair dream about hunting birds pose purrfectly to show my beauty. Scratch the furniture get video posted to internet for chasing red dot. Find a way to fit in tiny box. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back damn that dog you are a captive audience while sitting on the toilet, pet me. Meow loudly just to annoy owners chew foot slap kitten brother with paw. Then cats take over the world i shredded your linens for you, but go into a room to decide you didn't want to be in there anyway head nudges , but eats owners hair then claws head so favor packaging over toy with tail in the air."
        </p>
        <Hobby name={"Sharon"} description={"Favorite Hobby: Playing Pool"} imgAddress={this.state.team[0].image}/>
        <h3>{"These are my favorite place I have visited"} <br>
        </br></h3>
        <h4>
        {this.state.team[0].list[0]}<br></br>
        {this.state.team[0].list[1]}<br></br>
        {this.state.team[0].list[2]}</h4>

        <Hobby name={"Christina"} description={"Favorite Hobby: Snowboarding"}
        imgAddress={this.state.team[1].image}/>
       <h3>{"These are my favorite place I have visited"} <br>
       </br></h3>
       <h4>
       {this.state.team[1].list[0]}<br></br>
       {this.state.team[1].list[1]}<br></br>
       {this.state.team[1].list[2]}</h4>
      </div>
    );
  }
}

// export default class content extends Component {
//   render() {
//     return (
//       <div className="Content">
//         <img src={image} className="Snowboarding" alt="Snowboarding Chick" />
//     </div>
//         );
//     }
// }
