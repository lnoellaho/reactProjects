import React, {Component} from 'react'
import './App.css'

class Square extends Component {

renderColumn(rowNums) {
    var column = []
    var i = 0

    for (i=0; i<10; i++) {
        column.push(<td id={i+'_'+rowNums} className = "wave" onClick = {this.props.handler}></td>)
    }

    return column;
}

renderRows() {
    var rows = []
    var j = 0;

    for (j=0; j<10; j++) {
        rows.push(<tr>{this.renderColumn(j)}</tr>)
    }
    return rows;
}


    render() {
        return (
            <div>
            <table className="table">
             {this.renderRows()}
             </table>
            </div>
        )
    }
}

export default Square;
