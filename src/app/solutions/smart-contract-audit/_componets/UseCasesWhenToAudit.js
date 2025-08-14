import {
  FaRocket,
  FaListAlt,
  FaUserTie,
  FaSyncAlt,
  FaUsersCog,
} from "react-icons/fa";
import ContainerSolution from "../../_components/ContainerSolution";

export default function UseCasesWhenToAudit() {
  const useCases = [
    {
      icon: <FaRocket className="text-blue-500 text-4xl" />,
      title: "Pre-Deployment Audit",
      description:
        "Ensure that new token contracts, NFT minting engines, staking protocols, or DAO frameworks are clean and credible before going live.",
    },
    {
      icon: <FaListAlt className="text-green-500 text-4xl" />,
      title: "Listing & Exchange Readiness",
      description:
        "Many top exchanges and launchpads require third-party audits. Carlo’s audit plus ethical certification improves your listing readiness.",
    },
    {
      icon: <FaUserTie className="text-yellow-500 text-4xl" />,
      title: "Investor Due Diligence",
      description:
        "Seed and Series A investors often require proof of secure and compliant code. Use Carlo’s deliverables in your data room or pitch.",
    },
    {
      icon: <FaSyncAlt className="text-purple-500 text-4xl" />,
      title: "Upgrade & Migration Safety",
      description:
        "When upgrading contracts or launching v2 products, re-audit to prevent inherited risks.",
    },
    {
      icon: <FaUsersCog className="text-red-500 text-4xl" />,
      title: "Governance & DAO Formation",
      description:
        "Validate voting logic, power concentration, and override functions in newly formed or forked DAOs.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto  lg:pb-32 pb-15 text-foreground">
      <h2 className="text-4xl font-bold text-center mb-8">
        Use Cases: When to Audit
      </h2>
      <ContainerSolution array={useCases} />
    </section>
  );
}
