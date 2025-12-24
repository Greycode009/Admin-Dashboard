import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MonthlyCollectionChart = ({ data }) => {
  return (
    <div className="bg-[#EBEBEB] rounded-2xl p-3 pb-8 border border-gray-400 h-70 w-155">
      <h2 className="text-2xl font-bold m-3 text-[#131217]">
        Monthly Collection
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id="blueShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.20} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.10} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid vertical={false} stroke="#D2D2D2" strokeWidth={1} />

          <XAxis
            dataKey="month"
            padding={{ left: 30, right: 30 }}
            tick={{ fill: "#6B7280", fontSize: 16 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            ticks={[0, 2000, 4000, 6000]}
            tick={{ fill: "#6B7280", fontSize: 18 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2F48",
              borderRadius: "8px",
              border: "none",
              color: "#fff",
            }}
            labelStyle={{ color: "#fff" }}
            formatter={(value) => [`$${value}`, "Amount"]}
          />
          {/* 🔵 BLUE SHADE */}
          <Area
            type="linear"
            dataKey="amount"
            fill="url(#blueShade)"
            stroke="none"
            tooltipType="none"
          />
          <Line
            type="linear"
            dataKey="amount"
            stroke="#4A80DC"
            strokeWidth={3}
            dot={{ r: 4, fill: "#4A80DC" }}
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyCollectionChart;
