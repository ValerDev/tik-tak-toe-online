import { useState } from "react";
import styles from "../../styles/game.module.css";
import { GameSymbol } from "./GameSymbol.jsx";

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  useState({
    as: "dasdasdasdasd",
    sa: "asdasdasdasd",
  });

  if (isDraw) {
    return <div className={styles["game-info"]}>Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className={styles["game-info"]}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={styles["game-info"]}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
