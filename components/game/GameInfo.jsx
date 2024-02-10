import { useState } from "react";
import { GameSymbol } from "./GameSymbol.jsx";

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  useState({
    as: "dasdasdasdasd",
    sa: "asdasdasdasd",
  });

  if (isDraw) {
    return <div className={"mb-2.5"}>Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className={"mb-2.5"}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={"mb-2.5"}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
