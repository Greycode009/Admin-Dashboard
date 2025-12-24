import { RiAdminFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import Dashboardcard from "../components/Dashboardcard";
import { dashboardCard } from "./Data/dashboardData";
import MonthlyCollectionChart from "../components/MonthlyCollectionChart";
import { monthlyCollection } from "./Data/dashboardData";
import PaidUnpaid from "../components/PaidUnpaid";
import { paidUnpaidData } from "./Data/dashboardData";
import RecentPayments from "../components/RecentPayments";
import { recentPayments } from "./Data/dashboardData";

const Dashboard = () => {
  return (
    <div className=" flex-1 p-12 bg-[#EBEBEB] w-full ">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <span className="flex items-center text-2xl font-medium gap-3">
          <RiAdminFill /> Hi, Admin
          <FaAngleDown />
        </span>
      </div>
      {/* Cards */}
      <h1 className="text-3xl text-[#222] font-medium mb-5">Summary</h1>
      <div className="flex gap-3">
        {dashboardCard.map((card) => (
          <Dashboardcard key={card.id} title={card.title} value={card.value} />
        ))}
      </div>
     <div className="flex gap-4 items-center justify-between">
       {/* Monthly Collection  */}
      <div className="mt-6">
        <MonthlyCollectionChart data={monthlyCollection} />
      </div>

      {/* Pie Chart Paid Vs Unpaid */}
      <PaidUnpaid data={paidUnpaidData} />
     </div>

     {/* Recent Payments  */}
     <div className="mt-4">
      <RecentPayments data={recentPayments}/>
     </div>
    </div>
  );
};

export default Dashboard;
