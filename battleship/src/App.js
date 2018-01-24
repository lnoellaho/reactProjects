import React, { Component } from 'react';
import './App.css'
import Square from './square'
import Score from './score'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: [],
            torpedos: 25,
            ships: ["One", "Two", "Three", "Four", "Five"]
        }
        this.setBoard()
        this.placeShipVertical()
        this.placeShipTwoHorizontal()
        this.placeThreeShipVertical()
        this.placeFourShipHorizontal()
        this.placeFiveShipVertical()
    }

// The Function creates a two dimensional array in the board state
    setBoard() {
        for (var i=0; i<10; i++){
        this.state.board.push([])
        }
    }

//This function places One ship vertically two times. Two random numbers are created for the position of the ship to be placed. If the position is the same position as a buffer or a existing ship, it will not be placed.
    placeShipVertical() {
        var ship = "S"
        var buffer = "."
        for (var g=0; g<3; g++){
            var randomNumberColumn = (Math.floor(Math.random() * 10))
            var randomNumberRow = (Math.floor(Math.random() * 10))

            var newBoard = this.state.board

            if(newBoard[randomNumberColumn][randomNumberRow] === ship || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
                g--;
            } else {
                newBoard[randomNumberColumn][randomNumberRow] = ship
                this.setState({board: newBoard})
            }
        }
    }

// This function places a ship of Two-Block-Length at a random position three times. The buffer is created currently just for this function. The buffer will not allow any ships to be placed in the position of the buffer. Buffer is one block around the ship.
    placeShipTwoHorizontal() {
        var ship = "S"
        var buffer = "."
        for (var g=0; g<3; g++){
            var randomNumberColumn = (Math.floor(Math.random() * 8))
            var randomNumberRow = (Math.floor(Math.random() * 10))

            var newBoard = this.state.board

            if(newBoard[randomNumberColumn][randomNumberRow] === ship || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
                g--;
            } else {
                newBoard[randomNumberColumn][randomNumberRow]= ship
                newBoard[randomNumberColumn+1][randomNumberRow]= ship

                newBoard[randomNumberColumn][randomNumberRow+1]= buffer
                newBoard[randomNumberColumn][randomNumberRow-1]= buffer

                newBoard[randomNumberColumn+1][randomNumberRow+1]= buffer
                newBoard[randomNumberColumn+1][randomNumberRow-1]= buffer

                newBoard[randomNumberColumn+2][randomNumberRow]= buffer
                newBoard[randomNumberColumn+2][randomNumberRow+1]= buffer
                newBoard[randomNumberColumn+2][randomNumberRow-1]= buffer

                    if(randomNumberColumn > 1) {
                        newBoard[randomNumberColumn-1][randomNumberRow]= buffer
                        newBoard[randomNumberColumn-1][randomNumberRow+1]= buffer
                        newBoard[randomNumberColumn-1][randomNumberRow-1]= buffer

                        newBoard[randomNumberColumn-2][randomNumberRow]= buffer
                        newBoard[randomNumberColumn-2][randomNumberRow+1]= buffer
                        newBoard[randomNumberColumn-2][randomNumberRow-1]= buffer
                    } else if (randomNumberColumn == 1) {
                        newBoard[randomNumberColumn-1][randomNumberRow]= buffer
                        newBoard[randomNumberColumn-1][randomNumberRow+1]= buffer
                        newBoard[randomNumberColumn-1][randomNumberRow-1]= buffer
                    }

                this.setState({board: newBoard})
            }
        }
    }

//This function places two ships vertically two times. Two random numbers are created for the position of the ship to be placed. If the position is the same position as a buffer or a existing ship, it will not be placed.
    placeThreeShipVertical() {
        var ship = "S"
        var buffer = "."
        for (var g=0; g<2; g++){
            var randomNumberColumn = (Math.floor(Math.random() * 10))
            var randomNumberRow = (Math.floor(Math.random() * 8))

            var newBoard = this.state.board

            if(newBoard[randomNumberColumn][randomNumberRow] === ship
            || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
                g--;
            } else {
                newBoard[randomNumberColumn][randomNumberRow]= ship
                newBoard[randomNumberColumn][randomNumberRow+1]= ship
                newBoard[randomNumberColumn][randomNumberRow+2]= ship

                this.setState({board: newBoard})
            }
        }
    }

//This function places four ships horizontally two times. Two random numbers are created for the position of the ship to be placed. If the position is the same position as a buffer or a existing ship, it will not be placed.
    placeFourShipHorizontal() {
        var ship = "S"
        var buffer = "."
        for (var g=0; g<2; g++){
            var randomNumberColumn = (Math.floor(Math.random() * 7))
            var randomNumberRow = (Math.floor(Math.random() * 10))

            var newBoard = this.state.board

            if(newBoard[randomNumberColumn][randomNumberRow] === ship
            || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
                g--;
            } else {
                newBoard[randomNumberColumn][randomNumberRow]= ship
                newBoard[randomNumberColumn+1][randomNumberRow]= ship
                newBoard[randomNumberColumn+2][randomNumberRow]= ship
                newBoard[randomNumberColumn+3][randomNumberRow]= ship
                this.setState({board: newBoard})
            }
        }
    }

//This function places one ships vertically two times. Two random numbers are created for the position of the ship to be placed. If the position is the same position as a buffer or a existing ship, it will not be placed.
    placeFiveShipVertical() {
        var ship = "S"
        var buffer = "."
        for (var g=0; g<1; g++){
            var randomNumberColumn = (Math.floor(Math.random() * 10))
            var randomNumberRow = (Math.floor(Math.random() * 6))

            var newBoard = this.state.board

            if(newBoard[randomNumberColumn][randomNumberRow] === ship
            || newBoard[randomNumberColumn][randomNumberRow] === buffer) {
                g--;
            } else {
                newBoard[randomNumberColumn][randomNumberRow]= ship
                newBoard[randomNumberColumn][randomNumberRow+1]= ship
                newBoard[randomNumberColumn][randomNumberRow+2]= ship
                newBoard[randomNumberColumn][randomNumberRow+3]= ship
                newBoard[randomNumberColumn][randomNumberRow+4]= ship
                this.setState({board: newBoard})
            }
        }
    }

//This function grabs the position of the 
    handleOnClick(e) {
        var position = e.target.id
        position = position.split("")
        var boardState = this.state.board[position[0]][position[2]]

        var torpedocount = this.state.torpedos

        if (this.state.torpedos === 0 ) {
            alert("GAME OVER")
        }
        else if (e.target.className === "hit" || e.target.className === "miss") {

        }
        else if (boardState === "S" || boardState === "H" || boardState === "V") {
            e.target.className = "hit";
            this.setState({torpedos: torpedocount-1})

        } else {
            e.target.className = "miss";
            this.setState({torpedos: torpedocount-1})
        }

        console.log(this.state.torpedos)
    }

      render() {
          console.log(this.state.board)
          console.log(this.state.position)
        return (
            <div className="app">
                <Square handler={this.handleOnClick.bind(this)} board={this.state.board}/>

                <Score torpedos={this.state.torpedos}/>
            </div>
        );
      }
    }

export default App;
