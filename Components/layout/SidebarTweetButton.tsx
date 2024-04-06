"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaFeather } from "react-icons/fa";

export const SidebarTweetButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <div
        className="
  mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-secondary hover:bg-opacity-10  cursor-pointer transition text-primary hover:text-primary
  "
      >
        <FaFeather size={24} />
      </div>
      <div
        className="
      mt-6 hidden lg:block px-4 py-2 rounded-full bg-secondary hover:opacity-90 cursor-pointer transition
      "
      >
        <p
          className="
          hidden lg:block text-center font-semibold text-primary text-[18px]
          "
        >
          Write
        </p>
      </div>
    </div>
  );
};
