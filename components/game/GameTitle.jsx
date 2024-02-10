import Link from "next/link";
import { ArrowLeftIcon } from "./icons/ArrowLeft";
import { StarIcon } from "./icons/StarIcon";
import { UserIcon } from "./icons/UserIcon";
import { HistoryIcon } from "./icons/HistoryIcon";
export const GameTitle = () => {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex item-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
      >
        <ArrowLeftIcon />
        Home
      </Link>
      <h1 className="text-4xl leading-tight">Tik Tak Toe</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />2
        </div>
        <div className="flex items-center  gap-1">
          <HistoryIcon />1 min per move
        </div>
      </div>
    </div>
  );
};
