import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { RiSettingsLine } from "react-icons/ri";

const Sidebar = () => {
  const linkPage = ({ isActive }) =>
    `flex items-center text-2xl px-3 py-4 pl-10 gap-5 transition ${
      isActive ? "bg-[#33455D] text-white" : "text-gray-300 hover:bg-[#2b3f5f]"
    }`;

  return (
    <div className="w-70 h-100% bg-[#1F2F48]">
      {/* Logo  */}
      <div className="flex items-center gap-4 m-6 p-6">
        <span className="h-11 w-11 bg-blue-400 rounded-full inline-flex ">
          {" "}
        </span>
        <h1 className="text-white text-[26px] font-bold">Admin</h1>
      </div>
      {/* Menu */}
      <nav>
        <NavLink to="/" className={linkPage}>
          <MdSpaceDashboard className="text-[#CFD6E8]" size={30}/>Dashboard
        </NavLink >
        <NavLink to="/students" className={linkPage}>
         <PiStudentBold className="text-[#7A99BE]" size={30}/> Students
        </NavLink>
        <NavLink to="/fees" className={linkPage}>
         <FaRegMoneyBillAlt className="text-[#7A99BE]" size={30}/> Fees
        </NavLink>
        <NavLink to="/payments" className={linkPage}>
        <MdPayments className="text-[#7A99BE]" size={30}/>  Payments
        </NavLink>
        <NavLink to="/reports" className={linkPage}>
         <TbReportSearch className="text-[#7A99BE]" size={30}/> Reports
        </NavLink>
        <NavLink to="/settings" className={linkPage}>
          <RiSettingsLine className="text-[#7A99BE]" size={30}/>Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
