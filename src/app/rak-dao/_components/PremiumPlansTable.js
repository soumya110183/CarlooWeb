import HeadingReuse from "@/app/_subcomponents/HeadingReuse";

const premiumPlansData = [
  {
    plan: "Free Credence Plan",
    idealFor: "All RAK DAO setups",
    monthlyAED: "0",
    monthlyUSD: "0",
    includes: "Monthly snapshot, lifetime badge, ethical indicators",
  },
  {
    plan: "Innovator Essentials",
    idealFor: "Early-stage projects",
    monthlyAED: "96",
    monthlyUSD: "~26.20",
    includes: "Full dashboard, basic smart contract scans, UAE+EU compliance tracking",
  },
  {
    plan: "Blockchain Guardian",
    idealFor: "Scaling protocols",
    monthlyAED: "160",
    monthlyUSD: "~43.70",
    includes: "DeFi risk monitoring, explainability checks, token governance insights",
  },
  {
    plan: "Ethical Pinnacle Suite",
    idealFor: "Enterprises",
    monthlyAED: "180",
    monthlyUSD: "~49.00",
    includes: "Dedicated advisor, quarterly deep audits, global framework integration",
  },
];

const PremiumPlansTable = () => {
  return (
    <div className="p-4 font-sans text-gray-200 mt-10 pb-32">
      <HeadingReuse heading={"Premium Compliance Plans"} />

      {/* Desktop Table */}
      <div className="hidden md:block w-full max-w-7xl rounded-xl overflow-hidden shadow-xl bg-gray-800 mt-10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#5d3fd3] text-white text-sm font-semibold uppercase tracking-wider">
              <th className="py-4 px-6 text-left border-r border-gray-600">Plan</th>
              <th className="py-4 px-6 text-left border-r border-gray-600">Ideal For</th>
              <th className="py-4 px-6 text-center border-r border-gray-600">Monthly (AED)</th>
              <th className="py-4 px-6 text-center border-r border-gray-600">Monthly (USD)</th>
              <th className="py-4 px-6 text-left">Includes</th>
            </tr>
          </thead>
          <tbody>
            {premiumPlansData.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-700 ${
                  idx % 2 === 0 ? "bg-[#2c2c44]" : "bg-[#2c2c44]"
                }`}
              >
                <td className="py-4 px-6 font-medium border-r border-gray-700">{row.plan}</td>
                <td className="py-4 px-6 border-r border-gray-700">{row.idealFor}</td>
                <td className="py-4 px-6 text-center border-r border-gray-700">{row.monthlyAED}</td>
                <td className="py-4 px-6 text-center border-r border-gray-700">{row.monthlyUSD}</td>
                <td className="py-4 px-6">{row.includes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden mt-8 space-y-6">
        {premiumPlansData.map((row, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[#2c2c44] shadow-md p-5 border border-gray-700"
          >
            <h3 className="text-lg font-bold text-white">{row.plan}</h3>
            <p className="text-sm text-gray-300 mt-1">{row.idealFor}</p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="font-semibold text-[#5d3fd3]">AED {row.monthlyAED}</span>
              <span className="text-gray-400">({row.monthlyUSD})</span>
            </div>
            <p className="mt-3 text-gray-300 text-sm">{row.includes}</p>
          </div>
        ))}
      </div>

      <p className="md:text-[22px] text-base sm:text-[18px]  text-center w-full mt-10 max-sm:mt-4 text-foreground">
        <strong>Bonus:</strong> Every paid plan includes a 20% discount if you incorporate through
        Algorethics.
      </p>
    </div>
  );
};

export default PremiumPlansTable;
