"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarLinksProps {
  label: string;
  href?: string;
  icon: IconType;

  onClick?: () => void;
}

export const SidebarLinks: React.FC<SidebarLinksProps> = ({
  label,
  href,
  icon: Icon,

  onClick,
}) => {
  // const router = useRouter();

  // const handleClick = useCallback(() => {
  //   if (href) {
  //     router.push(href);
  //   }
  // }, [router, href]);

  return (
    <div onClick={onClick} className="flex flex-row items-center w-full">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-opacity-10 cursor-pointer lg:hidden text-primary">
        <Icon size={28} />
      </div>
      <div
        className="
          relative
          hidden
          lg:flex
          items-center
          gap-4
          p-4 rounded-full hover:bg-secondary hover:bg-opacity-10 cursor-pointer 
w-full
      "
      >
        <Icon size={24} className="text-primary" />
        <p className="hidden lg:block text-primary text-xl">{label}</p>
      </div>
    </div>
  );
};
