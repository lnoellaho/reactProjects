import React, { Component } from 'react'

export default class Hobby extends Component{
  render(){
      console.log(this.props)
    return(
      <section>
        <h2 className="Name">{this.props.name}</h2>
        <p>{this.props.description}</p>
        <img src={this.props.imgAddress} />
        <ul className="List">
            <li>{this.props.list}</li>
        </ul>
      </section>
    )
  }
}
