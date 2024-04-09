"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
// import { CgTwitter } from "react-icons/cg";
// import { CiSettings } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

interface HeaderProps {
  label?: string;
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ label, showBackButton }) => {
  const router = useRouter();

  // Navigate back
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-slate-800 p-5 flex items-center justify-center">
      <div className="flex flex-row items-center gap-2 relative w-full">
        {showBackButton && (
          <BiArrowBack
            onClick={handleBack}
            size={20}
            className="cursor-pointer hover:opacity-70 transition text-primary absolute left-0"
          />
        )}
        <h1 className="text-primary text-xl font-semibold">{label}</h1>
        <div className="w-full flex items-center justify-center text-secondary">
          <FaTwitter size={28} />
        </div>
      </div>
    </div>
  );
};
