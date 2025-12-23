import { RiAdminFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import Dashboardcard from "../components/Dashboardcard";
import { dashboardCard} from "./Data/dashboardData";

const Dashboard = () => {
  return <div className="min-h-screen flex-1 p-12 bg-[#EBEBEB] w-full ">
    {/* Header */}
    <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <span className="flex items-center text-2xl font-medium gap-3">
          <RiAdminFill />  Hi, Admin<FaAngleDown />

        </span>
    </div>
    {/* All card are down here  */}
    <h1 className="text-3xl font-bold mb-6">Summary</h1>
    <div className="flex gap-3">
        {dashboardCard.map((card) => (
        <Dashboardcard
        key = {card.id}
        title = {card.title}
        value = {card.value}
        />
        ))}
    </div>
    
  </div>;
};

export default Dashboard;
