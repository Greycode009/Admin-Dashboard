import React from "react";

const Dashboardcard = ({ title, value }) => {
  return (
    <div className="p-5 rounded-xl w-full border border-gray-400">
      <p className="text-gray-600 text-xl font-medium">{title}</p>
      <h2 className="text-4xl text-[#222] font-bold mt-2">{value}</h2>
    </div>
  );
};

export default Dashboardcard;
