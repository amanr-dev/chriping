import { IoHomeOutline, IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SidebarLogo } from "./layout/SidebarLogo";

const Sidebar = () => {
  //Nav links
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
      href: "/user/111",
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
