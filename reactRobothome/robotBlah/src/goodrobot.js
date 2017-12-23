import React, {Component} from 'react';

class GoodRobot extends Component {
    render() {
        return (
            <h1>I hear you saying {this.props.whatever}. Is that correct?</h1>
        );
    }
}

export default GoodRobot;
