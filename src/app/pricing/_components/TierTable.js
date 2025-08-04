

const tiers = [
  {
    name: 'Seed Compliance',
    description: 'Starter plan for essential compliance tools.',
    audience: 'Custom needs for corporations',
  },
  {
    name: 'Growth Compliance',
    description: 'Advanced features for scaling businesses.',
    audience: 'Growing companies',
  },
  {
    name: 'Pro Compliance',
    description: 'Comprehensive compliance for high-risk industries.',
    audience: 'Established organizations',
  },
  {
    name: 'Global Compliance',
    description: 'Enterprise-grade solutions for multinational operations.',
    audience: 'Large enterprises',
  },
  {
    name: 'Infinite Compliance',
    description: 'Custom-tailored solutions for mission-critical AI systems.',
    audience: 'Custom needs for corporations',
  },
];

const ComplianceTable = () => {
  return (
    <div className="flex justify-center p-4 mt-10 items-center  font-sans">
      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl bg-[#2c2c44]">
        <table className="w-full text-left text-white border-collapse">
          <thead>
            <tr className="bg-[#5d3fd3] text-white">
              <th className="py-5 px-6 font-bold text-lg whitespace-nowrap">Tier Name</th>
              <th className="py-5 px-6 font-bold text-lg">Description</th>
              <th className="py-5 px-6 font-bold text-lg whitespace-nowrap">Target Audience</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, index) => (
              <tr key={index} className="border-b border-gray-700 last:border-b-0">
                <td className="py-5 px-6 font-medium text-lg">{tier.name}</td>
                <td className="py-5 px-6 text-base text-gray-300">{tier.description}</td>
                <td className="py-5 px-6 text-base text-gray-300">{tier.audience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplianceTable;