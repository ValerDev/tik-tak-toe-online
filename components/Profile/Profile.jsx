import clsx from "clsx";
import avatar from "./avatar.png";
import Image from "next/image";

export const Profile = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        " flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatar} alt="avatar" unoptimized />
      <div>
        <div className="text-lg leading-tight">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">Rating: 1230</div>
      </div>
    </div>
  );
};
