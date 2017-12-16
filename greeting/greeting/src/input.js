import React, {Component} from 'react'

class Input extends Component {
    handleChange(event) {
        this.props.updateGreeting(event.target.value)
    }
    render() {
        return (
            <div>
                <input value={this.props.greeting} onChange={this.handleChange.bind(this)} className="form-control"/>
                <br/>
                <br/>
                <p className="lead">
                   <a className="btn btn-primary btn-lg" href="#" role="button">Transform</a>
                </p>
            </div>
        )
    }
}

export default Input
