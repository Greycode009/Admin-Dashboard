import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#5B8DEF", "#A7C3F2"];

const PaidUnpaid = ({ data }) => {
  return (
    <div className="bg-transparent rounded-2xl  p-6 border mt-6 h-70 w-full border-gray-400">
      <h2 className="text-2xl font-semibold mb-4">
        Paid vs Unpaid
      </h2>

      {/* Pie chart */}
      <div className="flex">
        <div className="w-full h-50">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={85}
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Text inside the border */}
      <div className=" gap-10 mt-14 text-base font-medium">
        <div className="flex items-center gap-2 text-2xl">
          Paid
        </div>

        <div className="flex items-center gap-2 text-2xl">
          Unpaid
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default PaidUnpaid;
