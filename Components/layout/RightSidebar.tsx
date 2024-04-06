import React from "react";
import { FaSearch } from "react-icons/fa";

export const RightSidebar = () => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="rounded-full bg-slate-800 w-full flex items-center px-2 py-1 justify-center text-primary">
        <FaSearch />
        <input
          type="text"
          className="w-full rounded-full bg-slate-800 px-2 py-1 text-primary outline-none"
          placeholder="Search"
        />
      </div>
      <div className="w-full h-[1px] bg-slate-800 my-2" />
      <div className="bg-slate-800 rounded-xl p-4 mt-6">
        <h2 className="text-primary text-xl font-semibold">Who to Follow</h2>
        <div className="flex flex-col gap-6 mt-4">{/* ADD USER LIST */}</div>
      </div>
    </div>
  );
};
