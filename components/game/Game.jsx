import { GameInfo } from "./GameInfo";
import { GameCell } from "./GameCell";
import { ResetButton } from "./ResetButton";
import { useGameState } from "./useGameState";

export default function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell?.includes(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <ResetButton resetGame={resetGame} />
    </div>
  );
}
