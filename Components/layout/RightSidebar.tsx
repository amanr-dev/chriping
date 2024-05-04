import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../Input";

// Rightsidebar Links
const links = [
  {
    label: "Following",
    href: "/following",
  },
  {
    label: "Discover",
    href: "/",
  },
  {
    label: "For You",
    href: "/",
  },
];

export const RightSidebar = () => {
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="rounded-full bg-slate-800 w-full flex items-center px-2 py-1 justify-center text-primary">
        <FaSearch />
        <Input placeholder="Search..." type="text" outline={false} />
      </div>
      <div className="w-full h-[1px] bg-slate-800 my-4" />
      <div className="w-full flex items-start justify-start flex-col text-primary capitalize gap-2 text-base">
        {links.map((link) => (
          <Link href={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="w-full h-[1px] bg-slate-800 my-4" />
      <div className="bg-slate-800 rounded-xl p-4 mt-6">
        <h2 className="text-primary text-base font-semibold">Who to Follow</h2>
        <div className="flex flex-col gap-6 mt-4"></div>
      </div>
    </div>
  );
};
