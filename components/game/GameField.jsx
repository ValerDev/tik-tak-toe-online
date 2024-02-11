import clsx from "clsx";
import { ZeroIcon } from "./icons/ZeroIcon";
import { CrossIcon } from "./icons/CrossIcon";
import { UiButton } from "../UiKit/UiButton";
const cells = new Array(19 * 19).fill(null);

export const GameField = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
            Step: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
            Next: <CrossIcon />
          </div>
        </div>
        <UiButton className="" variant="primary" size="md">
          Draw
        </UiButton>
        <UiButton className="" variant="outline" size="md">
          Give up
        </UiButton>
      </div>

      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cells.map((_, i) => (
          <button
            key={i}
            className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
          >
            <ZeroIcon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
};
