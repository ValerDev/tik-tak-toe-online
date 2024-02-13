import { useState } from "react";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/Game";
import { Header } from "../components/Header";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(3);
  const { cells, currentMove, handleCellClick, nextMove } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
        />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          nextMove={nextMove}
        />
      </main>
    </div>
  );
}
