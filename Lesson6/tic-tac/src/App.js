import React from "react";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      gameStart: true,
    };
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }
  isWinner = () => {
    const klicked = this.state.count % 2 === 0 ? "X" : "0";
    for (let i = 0; i < this.winnerLine.length; i++) {
      const line = this.winnerLine[i];
      if (
        this.state.squares[line[0]] === klicked &&
        this.state.squares[line[1]] === klicked &&
        this.state.squares[line[2]] === klicked
      ) {
        setTimeout(() => alert("Победил " + klicked + "!"), 500);
        this.setState({ gameStart: false });
      }
    }
  };
  clickHandler = (event) => {
    if (this.state.gameStart === true) {
      const data = event.target.getAttribute("data");
      const currentSquares = this.state.squares;
      if (currentSquares[data] === null) {
        currentSquares[data] = this.state.count % 2 === 0 ? "X" : "0";
        this.setState({ squares: currentSquares });
        this.setState({ count: this.state.count + 1 });
      } else {
        alert("Неплохая попытка, но нет :)");
      }
      this.isWinner();
    }
  };

  resetGame = (event) => {
    this.setState({ squares: Array(9).fill(null) });
    this.setState({ count: 0 });
    this.setState({ gameStart: true });
  };
  render() {
    return (
      <div className={styles.game}>
        <div className={styles.board}>
          <div className={styles.square} onClick={this.clickHandler} data="0">
            <p className={styles.text}>{this.state.squares[0]}</p>
          </div>
          <div className={styles.square} onClick={this.clickHandler} data="1">
            <p className={styles.text}>{this.state.squares[1]}</p>
          </div>
          <div className={styles.square} onClick={this.clickHandler} data="2">
            <p className={styles.text}>{this.state.squares[2]}</p>
          </div>
          <div className={styles.square} onClick={this.clickHandler} data="3">
            <p className={styles.text}>{this.state.squares[3]}</p>
          </div>
          <div className={styles.square} onClick={this.clickHandler} data="4">
            <p className={styles.text}>{this.state.squares[4]}</p>
          </div>
          <div className={styles.square} onClick={this.clickHandler} data="5">
            <p className={styles.text}>{this.state.squares[5]}</p>
          </div>
          <div className={styles.square} onClick={this.clickHandler} data="6">
            <p className={styles.text}>{this.state.squares[6]}</p>
          </div>
          <div className={styles.square} onClick={this.clickHandler} data="7">
            <p className={styles.text}>{this.state.squares[7]}</p>
          </div>
          <div className={styles.square} onClick={this.clickHandler} data="8">
            <p className={styles.text}>{this.state.squares[8]}</p>
          </div>
        </div>
        <div className={styles.button_container}>
          <button className={styles.button} onClick={this.resetGame}>
            RESET
          </button>
          <this.isWinner />
        </div>
      </div>
    );
  }
}
export default App;
