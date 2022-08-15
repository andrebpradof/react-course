import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';


class Square extends React.Component{
  render(){
    return(
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component{
  rederSquare(i){
    return <Square />;
  }
  render(){
    const status = 'Next player: X';
    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.rederSquare(0)}
          {this.rederSquare(1)}
          {this.rederSquare(2)}
        </div>
        <div className="board-row">
          {this.rederSquare(3)}
          {this.rederSquare(4)}
          {this.rederSquare(5)}
        </div>
        <div className="board-row">
          {this.rederSquare(6)}
          {this.rederSquare(7)}
          {this.rederSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component{
  render(){
    return(
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/*todo*/}</ol>
        </div>
      </div>
    );
  }
}

// =============================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);