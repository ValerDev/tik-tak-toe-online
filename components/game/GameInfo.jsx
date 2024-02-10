import clsx from "clsx";
import { Profile } from "../Profile/Profile";
import { CrossIcon } from "./icons/CrossIcon";
import { ZeroIcon } from "./icons/ZeroIcon";

export const GameInfo = ({ className }) => {
  return (
    <div
      className={
        (clsx(className),
        "bg-white rouned-2xl shadow-md px-8 py-4 flex justify-between")
      }
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className={"w-44"} />
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="text-slate-900 text-lg font-semibold">01:08</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-orange-600 text-lg font-semibold">00:08</div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <Profile className={"w-44"} />
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1">
            <ZeroIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
