import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

const getNextMove = (currentMove) => {
    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
    return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
};

export const useGameState = () => {
    const [{cells, currentMove}, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS,
    }));

    const nextMove = getNextMove(currentMove);
    
    const handleCellClick = (index) => {
        setGameState((lastGameState) => ({
            ...lastGameState,
            currentMove: getNextMove(lastGameState.currentMove),
            cells: lastGameState.cells.map((cell, i) =>
            i === index ? lastGameState.currentMove : cell
            ),
        }));
    };

    return {
        cells,
        currentMove,
        nextMove,
        handleCellClick,
    };
};
