// a useState állapottal látja el a GameBoard komponenst
import { useState } from "react";
import './Gameboard.css'

const rows = 10,
        cols = 10;


export default function GameBoard() {
    // fvhívások közötti lépések megjegyzése miatt állapotot kell felvenni
    const [board, setBoard] = useState(generateInicialState());

    function generateInicialState() {
        const board = [];
        for (let i = 0; i < rows; i++){
            board.push([]);
            for (let j = 0; j < cols; j++){
                board[i].push("");

            }
        }
        console.table(board);
        return board;
    }

    function generateBoardJsx(){
        return(
            <table className="gomoku-board">
                <tbody>
                    <tr>
                        <td className="gomoku-cell">asdf</td>
                        <td className="gomoku-cell">asdwqerf</td>
                    </tr>
                    <tr>
                        <td className="gomoku-cell">asdf</td>
                        <td className="gomoku-cell">asdwqerf</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    return (
        // react fregmens, 2 kifejezés 1be írva
        <>
            <h2>GameBoard</h2>
            {generateBoardJsx()}
        </>
    );
}