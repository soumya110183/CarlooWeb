import {
  FaFileAlt,
  FaShieldAlt,
  FaBalanceScale,
  FaRegCheckCircle,
  FaCertificate,
} from "react-icons/fa";
import ContainerSolution from "../../_components/ContainerSolution";

export default function KeyDeliverables() {
  const deliverables = [
    {
      icon: <FaFileAlt className="text-blue-500 text-4xl" />,
      title: "Line-by-Line Audit Report",
      description:
        "Technical breakdown of vulnerabilities, warnings, and suggestions.",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-4xl" />,
      title: "Exploitability Score",
      description:
        "A composite risk score (0-100) showing how exploitable your contract is.",
    },
    {
      icon: <FaBalanceScale className="text-yellow-500 text-4xl" />,
      title: "Ethical Risk Map",
      description:
        "A visual matrix showing fairness, transparency, and decentralization risks.",
    },
    {
      icon: <FaRegCheckCircle className="text-purple-500 text-4xl" />,
      title: "Compliance Readiness Report",
      description:
        "Narrative documentation explaining how the contract aligns with global AI and Web3 regulations.",
    },
    {
      icon: <FaCertificate className="text-red-500 text-4xl" />,
      title: "Carlo Smart Contract Badge",
      description:
        "A visual seal and QR-code link for embedding on launchpads, dashboards, or listing exchanges.",
    },
  ];

  return (
    <section className=" bg-background text-foreground lg:pb-32 pb-15">
      <h2 className="text-4xl font-bold text-center mb-8">
        What You Get: Key Deliverables
      </h2>
      <ContainerSolution array={deliverables} />
    </section>
  );
}
