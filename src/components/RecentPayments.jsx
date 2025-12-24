const RecentPayments = ({ data }) => {
  return (
    <div className="h-auto p-6  mt-6 w-full border border-gray-400 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Recent Payments</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xl">
          <thead>
            <tr className=" text-gray-700 border-b border-gray-400">
              <th className="pb-3">Student</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {(data || []).map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-400 last:border-none"
              >
                <td className="py-3">{item.name}</td>
                <td className="py-3"> ${item.amount.toLocaleString()}</td>
                <td className="py-3">{item.date}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        item.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPayments;
