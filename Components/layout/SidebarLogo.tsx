"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTwitter } from "react-icons/fa";
// import { PiTwitterLogo } from "react-icons/pi";

export const SidebarLogo = () => {
  const router = useRouter();
  //   console.log(router);

  return (
    <div
      onClick={() => router.push("/")}
      className="
  rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-secondary hover:bg-opacity-10  cursor-pointer transition text-secondary  
  "
    >
      <FaTwitter size={28} />
    </div>
  );
};
