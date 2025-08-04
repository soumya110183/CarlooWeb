
import { FaCheck } from 'react-icons/fa';

const featuresData = [
  {
    feature: 'Real-time Monitoring',
    seed: true,
    growth: true,
    pro: true,
    global: true,
    infinite: true,
  },
  {
    feature: 'Projects Supported',
    seed: '2',
    growth: '5',
    pro: 'Unlimited',
    global: 'Unlimited',
    infinite: 'Unlimited',
  },
  {
    feature: 'Regions Supported',
    seed: 'Basic (GDPR, CCPA)',
    growth: 'Multi-region',
    pro: 'Global',
    global: 'Global',
    infinite: 'Global',
  },
  {
    feature: 'Feedback Loops',
    seed: false,
    growth: true,
    pro: true,
    global: true,
    infinite: true,
  },
  {
    feature: 'Compliance Dashboard',
    seed: false,
    growth: true,
    pro: true,
    global: true,
    infinite: true,
  },
  {
    feature: 'Dedicated Support',
    seed: 'Email',
    growth: 'Priority Email',
    pro: 'Priority Phone & Email',
    global: 'Dedicated Consultant',
    infinite: '24/7 Dedicated Support',
  },
  {
    feature: 'Audit Logs',
    seed: false,
    growth: true,
    pro: true,
    global: true,
    infinite: true,
  },
  {
    feature: 'Custom Policy Rules',
    seed: false,
    growth: false,
    pro: true,
    global: true,
    infinite: true,
  },
  {
    feature: 'On-Premises Deployment',
    seed: false,
    growth: false,
    pro: false,
    global: false,
    infinite: true,
  },
  {
    feature: 'Custom Features',
    seed: false,
    growth: false,
    pro: false,
    global: false,
    infinite: true,
  },
];

const tiers = ['Seed Compliance', 'Growth Compliance', 'Pro Compliance', 'Global Compliance', 'Infinite Compliance'];

const getDisplayValue = (value) => {
  if (value === true) {
    return <FaCheck className="text-green-500 mx-auto" />;
  }
  if (value === false) {
    return '—';
  }
  return value;
};

const ComplianceFeatureTable = () => {
  return (
    <div className="flex justify-center p-4  font-sans text-gray-200 mt-10 pb-32 ">
      <div className="w-full max-w-7xl rounded-xl overflow-hidden shadow-xl bg-gray-800">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#5d3fd3] text-white text-sm font-semibold uppercase tracking-wider">
              <th className="py-4 px-6 text-left border-r border-gray-600">Feature</th>
              {tiers.map((tier, index) => (
                <th key={index} className="py-4 px-4 text-center border-r border-gray-600 last:border-r-0">
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featuresData.map((row, rowIndex) => (
              <tr key={rowIndex} className={`border-b border-gray-700 ${rowIndex % 2 === 0 ? 'bg-[#2c2c44]' : 'bg-[#2c2c44]'}`}>
                <td className="py-4 px-6 text-left font-medium border-r border-gray-700">{row.feature}</td>
                <td className="py-4 px-4 text-center border-r border-gray-700">{getDisplayValue(row.seed)}</td>
                <td className="py-4 px-4 text-center border-r border-gray-700">{getDisplayValue(row.growth)}</td>
                <td className="py-4 px-4 text-center border-r border-gray-700">{getDisplayValue(row.pro)}</td>
                <td className="py-4 px-4 text-center border-r border-gray-700">{getDisplayValue(row.global)}</td>
                <td className="py-4 px-4 text-center">{getDisplayValue(row.infinite)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplianceFeatureTable;