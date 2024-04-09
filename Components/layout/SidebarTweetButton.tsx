"use client";

import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

export const SidebarTweetButton = () => {
  const loginModal = useLoginModal();

  // Toggle modal function
  const toggleModal = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  const router = useRouter();

  return (
    <div onClick={toggleModal}>
      <div
        className="
  
        mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-secondary hover:bg-opacity-10  cursor-pointer transition text-primary hover:text-primary
  
  "
      >
        <FaFeather size={24} />
      </div>
      <div
        className="
      mt-6 hidden lg:block px-3 py-2 rounded-full bg-secondary hover:opacity-90 cursor-pointer transition
      "
      >
        <div className="flex items-center justify-center flex-row w-full gap-4 text-primary">
          <FaFeather size={24} />
          <p
            className="
          hidden lg:block text-center font-semibold text-blue-50 text-[18px]
          "
          >
            Write
          </p>
        </div>
      </div>
    </div>
  );
};
