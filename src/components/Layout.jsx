import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-18 pt-17 pb-0 h-screen bg-[#DFE3E6]">
      <div className="flex rounded-t-3xl overflow-hidden h-full shadow-2xl">
        {/* no scroll sidebar  */}
        <Sidebar />
        {/* scroll main content  */}
        <div className="flex-1 overflow-y-auto bg-[#EBEBEB] no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
