import Image from "next/image";
import TrustSteps from "../Why-carlo/_subcomp/TrustSteps";
import HeadingReuse from "../_subcomponents/HeadingReuse";

const trustStepsData = [
  {
    title: "⚖️ European Union AI Act:",
    steps: [
      "Establishes a legal framework for trustworthy AI development.",
      "How Carlo Helps: Monitors high-risk AI applications to ensure compliance with EU regulations.",
    ],
  },
  {
    title: "🔍 Ethics Guidelines for Trustworthy AI (EU):",
    steps: [
      "Promotes transparency, accountability, and fairness.",
      "How Carlo Helps: Automates the detection of bias and enhances explainability in AI models.",
    ],
  },
  {
    title: "🌐 UNESCO Recommendation on AI Ethics:",
    steps: [
      "Encourages ethical AI use in education, research, and public policy.",
      "How Carlo Helps: Provides actionable insights for maintaining AI systems’ ethical integrity.",
    ],
  },
  {
    title: "📜 OECD AI Principles:",
    steps: [
      "Ensures AI systems respect human rights and democratic values.",
      "How Carlo Helps: Tracks AI compliance with OECD benchmarks and provides corrective feedback.",
    ],
  },
  {
    title: "🤖 IEEE Global Initiative on AI Ethics:",
    steps: [
      "Focuses on the ethical design and deployment of intelligent systems.",
      "How Carlo Helps: Enforces ethical policies during the development and deployment phases.",
    ],
  },
  {
    title: "🏛️ Council of Europe’s Framework Convention on AI:",
    steps: [
      "Provides legal standards for AI governance and human rights.",
      "How Carlo Helps: Ensures AI systems comply with human-centered governance standards.",
    ],
  },
  {
    title: "🔄 Algorithmic Justice League Guidelines:",
    steps: [
      "Advocates for equity and accountability in algorithms.",
      "How Carlo Helps: Detects and rectifies biases in data and algorithms, ensuring equitable outcomes.",
    ],
  },
  {
    title: "🇯🇵 Japan’s AI Governance Guidelines:",
    steps: [
      "Establishes responsible AI principles in Japan.",
      "How Carlo Helps: Provides tailored compliance solutions for local AI applications.",
    ],
  },
  {
    title: "🇬🇧 UK National AI Strategy:",
    steps: [
      "Strengthens AI innovation while maintaining ethical standards.",
      "How Carlo Helps: Tracks compliance with ethical and regulatory frameworks during AI innovation.",
    ],
  },
  {
    title: "🇸🇬 Singapore Model AI Governance Framework:",
    steps: [
      "Provides best practices for transparency and explainability.",
      "How Carlo Helps: Enhances AI systems' transparency through detailed reporting.",
    ],
  },
];


export default function page() {
  return (
    <div className="mt-50">
      <section className="w-full max-w-[1200px]  mx-auto justify-between text-white pb-32">
        <div className="w-full ">
          <HeadingReuse heading={"Ethical AI Guidelines: Building Responsible AI Systems"} />
          <div className="mt-4">
            {trustStepsData.map((item, index) => (
              <TrustSteps key={index} title={item.title} steps={item.steps} />
            ))}
          </div>
        </div>
        <div>
          <Image
            src="/machine-ai 1.png"
            alt="robot-validator"
            className="w-[500px]"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}
