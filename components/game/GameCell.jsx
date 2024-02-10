import { GameSymbol } from "./GameSymbol.jsx";
import { clsx } from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-gray-400 -ml-px -mt-px flex item-center justify-center",
        isWinner && "bg-red-400",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
