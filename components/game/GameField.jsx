import clsx from "clsx";
import { UiButton } from "../UiKit/UiButton";
import { useGameState } from "./useGameState";
import { GameSymbol } from "./GameSymbol";

export const GameField = ({ className }) => {
  const { cells, currentMove, handleCellClick, nextMove } = useGameState();
  const actions = (
    <>
      <UiButton variant="primary" size="md">
        Draw
      </UiButton>
      <UiButton variant="outline" size="md">
        Give up
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell key={index} onClick={() => handleCellClick(index)}>
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};

const GameCell = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
};

const GameFieldLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
};

const GameMoveInfo = ({ actions, currentMove, nextMove }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
          Step: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
};

const GameGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
};
