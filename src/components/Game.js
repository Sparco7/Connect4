import React from 'react';
import gameCSS from './game.css';

import calculateVertical from '../CalculateFuncs/calculateVertical';
import calculateHorizontal from '../CalculateFuncs/calculateHorizontal';
import calculateRightDiag from '../CalculateFuncs/calculateRightDiag';
import calculateLeftDiag from '../CalculateFuncs/calculateLeftDiag';

class Game extends React.Component {

    // Declaring properties
    state = {
        board: [],
        player1: 'RED',
        player2: 'BLUE',
        currentPlayer: null,
        gameStatus: null,
        message: '',
        discCount: 0,
        winnerArr: [] // example: ['0,3','0,4','0,5','0,6']
    }

    componentDidMount() {    
        this.initBoard();
    } 

    // initializing board
    initBoard = () => {
        // console.log('gameStatus is: ',this.state.gameStatus);
        this.setState({board: []});
        this.setState({currentPlayer: null});
        this.setState({gameStatus: null});
        this.setState({message: ''});
        this.setState({discCount: 0});
        this.setState({winnerArr: []});

        let board = [];
        // creating 6 rows
        for(let j=0; j<6; j++) {
            let row = [];
            // filling rows in NULL
            for(let i=0; i<7; i++) {
                row.push(null);
            }
            board.push(row);
        }
        this.setState({board: board});
        this.setState({currentPlayer: this.state.player1});
    }

    // user's placing a disc
    placeCell = (disc) => {
        if(!this.state.gameStatus) {
            let board = this.state.board;
            let player = this.state.currentPlayer;
            for(let i=5; i>=0; i--) {
                if(!board[i][disc]) {
                    board[i][disc] = player;
                    this.setState({discCount: this.state.discCount+1});
                break;
                }
            }
            this.setState({board: board});

            // changing player's turn
            this.state.currentPlayer == this.state.player1 ? 
                this.setState({currentPlayer: this.state.player2}) : 
                this.setState({currentPlayer: this.state.player1});
                
            let result = this.caclulateResults();
            if (result) {
                    this.setState({gameStatus: result[0]});
                    this.setState({winnerArr: result[1]});
                    this.setState({message: result[2]});
            }
        }  
    }

    caclulateResults = () => {

                let result = null;
                result = calculateHorizontal(
                    this.state.board, this.state.discCount,
                    this.state.winnerArr,
                    this.state.gameStatus);
                if (result) {
                    return result;
                };

                result = calculateVertical(
                    this.state.board, this.state.discCount,
                    this.state.winnerArr,
                    this.state.gameStatus);
                if (result) {
                    return result;
                };

                result = calculateLeftDiag(
                    this.state.board, this.state.discCount,
                    this.state.winnerArr,
                    this.state.gameStatus); 
                if (result) {
                    return result;
                };  

                result = calculateRightDiag(
                    this.state.board, this.state.discCount,
                    this.state.winnerArr,
                    this.state.gameStatus);
                if (result) {
                    return result;
                };
   
    }

  render() {
    return (
        <div>
            <div className="head-line"><h1>Connect 4</h1></div>
            <div> 
                <button type="button" className="btn btn-secondary new-game"
                    onClick={()=> this.initBoard()}>
                    New Game
                </button>
            </div>
            <div className={this.state.currentPlayer}>
                    { !(this.state.gameStatus)&&(this.state.discCount < 42) &&
                    <p>
                        {this.state.currentPlayer} TURN
                    </p>
                    }
            </div>
            <div className="win-msg"><h2>{this.state.message}</h2></div>
            <div className="board">
              { 
                  this.state.board.map((row, i) =>
                   <Row key={i} row={row} i={i} 
                    placeCell={this.placeCell}
                    winnerCells={this.state.winnerArr} />)
              }

            </div>
        </div>
    );
  }
} // Game

const Row = ({row, i, placeCell, gameStatus, winnerCells, board,
                winnerArr, message, discCount}) => {
  return (
    <div className="row">
        { 
            row.map((val, col) =>
           <Cell key={col}
            val={val} col={col} 
            board={board}
            placeCell={placeCell} gameStatus={gameStatus}
            isWinner={winnerCells.includes(`${col},${i}`)} />)
        }
    </div>
    )
}

const Cell = ({val, col, placeCell, gameStatus, isWinner,
                board, winnerArr, message, discCount}) => {

  
  let color = '';
  let winnerClass = 'cell';

      if (isWinner) {
        winnerClass = 'cell winner'
      } 
      if (val === 'RED') {
          color = 'red';
      } else if (val === 'BLUE') {
          color ='blue';
      }


  return (
    <div>
        <div className={winnerClass} onClick={() => {placeCell(col)}}>
            <div className={color}></div>
        </div>

    </div>

    )
}

export default Game;