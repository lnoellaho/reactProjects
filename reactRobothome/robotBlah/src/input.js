import React, {Component} from "react";

class GreetingInput extends Component{
    handleChange(e){
        this.props.updateGreeting(e.target.value)
    }
    render(){
        return (
            <div>
            <input placeholder="Say something" value={this.props.greetings} onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}
export default GreetingInput;
