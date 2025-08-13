import { FaFileAlt, FaShieldAlt, FaBalanceScale, FaRegCheckCircle, FaCertificate } from "react-icons/fa";

export default function KeyDeliverables() {
  const deliverables = [
    {
      icon: <FaFileAlt className="text-blue-500 text-4xl" />,
      title: "Line-by-Line Audit Report",
      description:
        "Technical breakdown of vulnerabilities, warnings, and suggestions."
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-4xl" />,
      title: "Exploitability Score",
      description:
        "A composite risk score (0-100) showing how exploitable your contract is."
    },
    {
      icon: <FaBalanceScale className="text-yellow-500 text-4xl" />,
      title: "Ethical Risk Map",
      description:
        "A visual matrix showing fairness, transparency, and decentralization risks."
    },
    {
      icon: <FaRegCheckCircle className="text-purple-500 text-4xl" />,
      title: "Compliance Readiness Report",
      description:
        "Narrative documentation explaining how the contract aligns with global AI and Web3 regulations."
    },
    {
      icon: <FaCertificate className="text-red-500 text-4xl" />,
      title: "Carlo Smart Contract Badge",
      description:
        "A visual seal and QR-code link for embedding on launchpads, dashboards, or listing exchanges."
    }
  ];

  return (
    <section className="py-16 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-8">
        What You Get: Key Deliverables
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {deliverables.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white "
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold text-black">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground text-black">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
