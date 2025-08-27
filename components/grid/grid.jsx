import { useState } from "react";
import Card from "../card/card";
import "./grid.css";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Grid({numberOfCards}){
    const [turn, setTurn] = useState(true);     //flase-X, true-O
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [winner, setWinner] = useState(null);
function isWinner(board, symbol) {
    // rows
    if (board[0] === symbol && board[1] === symbol && board[2] === symbol) return symbol;
    if (board[3] === symbol && board[4] === symbol && board[5] === symbol) return symbol;
    if (board[6] === symbol && board[7] === symbol && board[8] === symbol) return symbol;

    // columns
    if (board[0] === symbol && board[3] === symbol && board[6] === symbol) return symbol;
    if (board[1] === symbol && board[4] === symbol && board[7] === symbol) return symbol;
    if (board[2] === symbol && board[5] === symbol && board[8] === symbol) return symbol;

    // diagonals
    if (board[0] === symbol && board[4] === symbol && board[8] === symbol) return symbol;
    if (board[2] === symbol && board[4] === symbol && board[6] === symbol) return symbol;

    return "";
}

    function play(index){
        if (winner || board[index] !== "") return;

        console.log("Player Moved : ", index);
        const newBoard = [...board];
        newBoard[index] = turn ? "O" : "X";
        setBoard(newBoard);

        setTurn(!turn);
        const win = isWinner(newBoard, turn ? "O" : "X");
        if (win){
            setWinner(win);
            toast.success(`Congratulations ${win}, you won the game!`);
        }
    }
    function reset(){
        setWinner(null);
        setTurn(true);
        setBoard(Array(numberOfCards).fill(""));
    }
    return(
        <>
        {winner &&
            (<>
                <h1>Winner is {winner} </h1>
                <button onClick={reset} > Restart the Game </button>
            </>)
        }
        <h1>Current Turn : {(turn)?"O":"X"}</h1>
        <div className="grid">
            {board.map((value, idx) => {
                return <Card onPlay={play} player={value} index={idx}/>
            })}
        </div>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Flip} />
        </>
    );
}
export default Grid;
//Capital hoga pahle letter