import Image from "next/image";
import logo from "./logo.svg";
import { Profile } from "../Profile/Profile";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

export const Header = () => {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logo} alt="logo" />
      <div className="h-8 w-px bg-slate-200 mx-6" />
      <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2xl leading-tight hover:bg-teal-500 transition-colors">
        Play
      </button>
      <button className="flex items-center ml-auto gap-2 text-start text-teal-600 ">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
