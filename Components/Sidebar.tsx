"use client";
import { IoHomeOutline, IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SidebarLogo } from "./layout/SidebarLogo";
import { SidebarLinks } from "./layout/SidebarLinks";
import { CiLogout } from "react-icons/ci";
import { SidebarTweetButton } from "./layout/SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const Sidebar = () => {
  const router = useRouter();
  // const { data: currentUser } = useCurrentUser();

  const currentUser = false; //example user

  const handleClick = useCallback(
    (href: string) => {
      if (href) {
        router.push(href);
      }
    },
    [router]
  );

  //Sidebar links
  const navLinks = [
    {
      label: "Home",
      href: "/",
      icon: IoHomeOutline,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: IoNotificationsOutline,
    },

    {
      label: "Profile",
      href: "/user/:id",
      icon: CgProfile,
    },
  ];

  return (
    <div
      className="col-span-1 h-full pr-4
  md:pr-6"
    >
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[222px]">
          <SidebarLogo />
          {navLinks.map((links) => (
            <SidebarLinks
              key={links.label}
              href={links.href}
              label={links.label}
              icon={links.icon}
              onClick={() => handleClick(links.href)}
            />
          ))}
          {currentUser && (
            <SidebarLinks
              onClick={() => signOut()}
              icon={CiLogout}
              label="Logout"
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
