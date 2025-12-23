import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-16 pb-0 min-h-screen bg-[#DFE3E6]">
      <div className="flex rounded-3xl overflow-hidden h-full shadow-2xl">
        <Sidebar />
        <div className="flex-1  bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
