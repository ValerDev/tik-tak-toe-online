import clsx from "clsx";
import avatar1 from "../Game/images/avatar1.png";
import Image from "next/image";

export const Profile = ({ className, name, rating, avatar = avatar1 }) => {
  return (
    <div
      className={clsx(
        className,
        " flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatar} alt="avatar" unoptimized />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate ">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Rating: {rating}
        </div>
      </div>
    </div>
  );
};
