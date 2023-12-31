const { stat } = require("fs");

class Square extends React.Component{
    render(){
        return (
        <button className="square" onClick={() => this.props.onClick()}>
            {this.props.value}
        </button>
        )
    }
}

class Board extends React.Component{

    //ХРАНЕНИЕ СОСТОЯНИЯ ИГРЫ
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    renderSquare(i){
        return (

        <Square value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />
        )
    }

    handleClick(i){
        const squares = this.state.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    render(){
        const winner = calculateWinner(this.state.squares);
        let status;

        if (winner){
            status = 'Выиграл ' + winner;
        } else{
            status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
            </div>
            
        )
    }
}


class Game extends React.Componrnt{
    render(){
        return(<div className="game">
            <Board/>
        </div>)
    }
}


function calculateWinner(){
    const lines = [ //массив вариантов победы
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares [a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}





ReactDOM.render(<Game/>, document.querySelector("#root"))