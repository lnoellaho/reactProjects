import React, {Component} from 'react';

class BadRobot extends Component {
    render() {
        var chars= this.props.whatever.split('');
        var bla= ["B","L","A"]

        return (
            <h1> I hear you saying {change()} Is that correct? </h1>
        );
    }
}

export default BadRobot;


var blah = chars.map(function(e) {
    
})
