import { Toaster } from "react-hot-toast";
import { Header } from "../Header";
import Sidebar from "../Sidebar";
import { RightSidebar } from "./RightSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen max-w-[1000px] mx-auto bg-main w-full">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Toaster position="top-right" />
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-x-slate-800">
            <Header />
            {children}
          </div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
