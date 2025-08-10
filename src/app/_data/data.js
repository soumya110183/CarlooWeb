import {
  FaBrain,
  FaComments,
  FaFileAlt,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";
import {} from "react-icons/fa";

import {
  FaEye,
  FaUsers,
  FaUserShield,
  FaBalanceScale,
  FaCheckCircle,
  FaLock,
  FaGlobe,
  FaGavel,
  FaHandshake,
  FaScroll,
  FaLandmark,
  FaSyncAlt,
  FaFlag,
  FaLightbulb,
  FaBook,
  FaRobot,
  FaSearch,
  FaClipboardCheck,
  FaBalanceScaleRight,
  FaCogs,
  FaCloud,
  FaIndustry,
  FaRocket,
  FaUniversity,
} from "react-icons/fa";

export const providersData = [
  {
    title: "Technology Providers:",
    paragraph: [
      "- Collaborate to integrate Carlo's compliance tools into your AI frameworks, development platforms, or cloud solutions.",
      "- Example: Partnerships with major platforms like AWS, Microsoft Azure, or Google Cloud to embed Carlo into their ecosystems.",
    ],
    icon: <FaCloud color="black" size={22} />,
  },
  {
    title: "Industry Leaders:",
    paragraph: [
      "- Co-create tailored compliance solutions for specific industries such as healthcare, finance, and retail., development platforms, or cloud solutions.",
      "- Example: Developing sector-specific compliance packages for partners like MedTech companies or FinTech innovators.",
    ],
    icon: <FaIndustry color="black" size={22} />,
  },
  {
    title: "Regulatory Bodies:",
    paragraph: [
      "- Work together to set benchmarks for AI compliance and influence global standards.",
      "- Example: Joint initiatives with GDPR task forces or AI ethics councils to create practical compliance guidelines.",
    ],
    icon: <FaBalanceScale color="black" size={22} />,
  },
  {
    title: "Startups & Incubators:",
    paragraph: [
      "Help startups scale responsibly by integrating compliance from day one.",
      "Example: Offering discounted plans and mentorship for startups in AI accelerators.",
    ],
    icon: <FaRocket color="black" size={22} />,
  },
  {
    title: "Academic Institutions & Research Centers:",
    paragraph: [
      "- Promote ethical AI research and development by incorporating Carlo into academic curriculums and AI research projects.",
      "Example: Collaborating with universities to explore AI fairness and bias mitigation strategies.",
    ],
    icon: <FaUniversity color="black" size={22} />,
  },
];

export const islamicEthicsPrinciples = [
  {
    title: "1. Maqasid al-Sharia (The Higher Objectives of Islamic Law):",
    paragraph: [
      "The preservation of religion, life, intellect, lineage, and property is foundational to all ethical decision-making in Islamic systems.",
      "• Carlo Enforcement: Carlo deploys AI value-alignment metrics and risk assessments that evaluate whether model outputs jeopardize these protected domains. It halts deployment of systems that violate these principles until corrective action is taken.",
    ],
    icon: <FaBalanceScale color="black" size={22} />,
  },
  {
    title: "2. Adl and Ihsan (Justice and Benevolence):",
    paragraph: [
      "Equity, compassion, and the avoidance of exploitation are core to Islamic values.",
      "• Carlo Enforcement: Carlo audits output distributions in AI applications for discriminatory patterns. Whether in lending decisions or employment recommendations, it flags outputs that exhibit structural injustice.",
    ],
    icon: <FaHeart color="black" size={22} />,
  },
  {
    title: "3. Darar (Avoidance of Harm):",
    paragraph: [
      "Harm, whether physical, social, or psychological, must be proactively avoided.",
      "• Carlo Enforcement: Risk-sensitive applications like autonomous vehicles, biometric surveillance, and medical diagnostics are run through Carlo's ethical safety module that calculates risk scores and requires human oversight at defined thresholds.",
    ],
    icon: <FaShieldAlt color="black" size={22} />,
  },
  {
    title: "4. Halal and Haram (Permissibility Framework):",
    paragraph: [
      "AI must not be used to support or promote haram (prohibited) activities such as gambling, interest-based financial services (riba), alcohol, pornography, or unethical marketing.",
      "• Carlo Enforcement: Carlo includes a contextual classifier trained to identify and restrict integration with haram content APIs, datasets, or user workflows. It also enables domain whitelisting to restrict AI use to halal-aligned business processes.",
    ],
    icon: <FaCheckCircle color="black" size={22} />,
  },
  {
    title: "5. Amanah and Taklif (Trust and Accountability):",
    paragraph: [
      "The ethical trust placed on developers, engineers, and decision-makers must be preserved.",
      "• Carlo Enforcement: Every change to the AI system—from dataset manipulation to final output—is logged with identity tracking and tamper-proof logs. This creates full accountability and governance transparency for Sharia compliance reviews.",
    ],
    icon: <FaUserShield color="black" size={22} />,
  },
];

export const dataProtectionLawsData = [
  {
    title: "🛡️ General Data Protection Regulation (GDPR):",
    steps: [
      "Europe’s comprehensive framework for data protection and privacy.",
      "How Carlo Helps: Monitors data flows, enforces consent management, and automates compliance actions to prevent violations.",
    ],
  },
  {
    title: "🇬🇧 Data Protection Act 2018 (UK):",
    steps: [
      "Governs the processing of personal data in the United Kingdom.",
      "How Carlo Helps: Ensures lawful data processing and safeguards sensitive personal information.",
    ],
  },
  {
    title: "🇨🇳 Personal Information Protection Law (PIPL - China):",
    steps: [
      "China’s leading law regulating personal data collection and cross-border data sharing.",
      "How Carlo Helps: Enforces data localization requirements and monitors adherence to PIPL standards.",
    ],
  },
  {
    title: "🇺🇸 US Algorithmic Accountability Act:",
    steps: [
      "Focuses on transparency, fairness, and accountability in algorithmic systems.",
      "How Carlo Helps: Detects bias in algorithms, ensures fairness, and provides actionable feedback for retraining.",
    ],
  },
  {
    title: "🌟 California Consumer Privacy Act (CCPA):",
    steps: [
      "Grants California residents control over their personal data.",
      "How Carlo Helps: Automates compliance for consumer opt-outs, data access, and deletion requests.",
    ],
  },
  {
    title:
      "🏥 Health Insurance Portability and Accountability Act (HIPAA - US):",
    steps: [
      "Protects sensitive health information in the U.S.",
      "How Carlo Helps: Encrypts health data and ensures compliant handling of electronic health records (EHRs).",
    ],
  },
  {
    title: "🇧🇷 Brazil's General Data Protection Law (LGPD):",
    steps: [
      "Regulates personal data processing in Brazil.",
      "How Carlo Helps: Tracks data usage and ensures informed consent for all data processing activities.",
    ],
  },
  {
    title: "🇦🇺 Australia Privacy Act 1988:",
    steps: [
      "Governs how personal information is collected, used, and disclosed in Australia.",
      "How Carlo Helps: Identifies and secures sensitive data, ensuring compliance with national guidelines.",
    ],
  },
  {
    title: "🇮🇳 India's Data Protection Bill (Proposed):",
    steps: [
      "Establishes comprehensive data protection rules for Indian citizens.",
      "How Carlo Helps: Prepares businesses for upcoming regulations by enforcing best practices.",
    ],
  },
  {
    title: "🇸🇬 Singapore Personal Data Protection Act (PDPA):",
    steps: [
      "Regulates data collection and management practices in Singapore.",
      "How Carlo Helps: Ensures transparency and security in data handling processes.",
    ],
  },
  {
    title: "🇿🇦 South Africa's Protection of Personal Information Act (POPIA):",
    steps: [
      "Ensures data privacy and security compliance in South Africa.",
      "How Carlo Helps: Tracks and secures data in compliance with local regulations.",
    ],
  },
];

export const containerData = [
  {
    title: "Transparency:",
    paragraph: [
      "AI systems must be understandable to all.",
      "• Carlo Enforcement: Carlo logs AI decisions and makes models explainable through visualization dashboards, real-time traceability, and model lineage audits.",
    ],
    icon: <FaEye color="black" size={22} />,
  },
  {
    title: "Inclusion:",
    paragraph: [
      "AI must serve every human being and respect all social groups.",
      "• Carlo Enforcement: Carlo detects exclusionary patterns in training data and monitors demographic disparities in outputs, flagging any systemic bias.",
    ],
    icon: <FaUsers color="black" size={22} />,
  },
  {
    title: "Responsibility:",
    paragraph: [
      "Designers and users of AI must take responsibility for their systems.",
      "• Carlo Enforcement: Enforces accountable version control, tracks who made each model or data change, and binds developers to a responsibility framework with real-time feedback.",
    ],
    icon: <FaUserShield color="black" size={22} />,
  },
  {
    title: "Impartiality:",
    paragraph: [
      "AI must not foster bias or discrimination.",
      "• Carlo Enforcement: Uses fairness metrics, demographic parity testing, and bias detection algorithms to ensure outputs are equitable and unbiased.",
    ],
    icon: <FaBalanceScale color="black" size={22} />,
  },
  {
    title: "Reliability:",
    paragraph: [
      "AI must operate securely and consistently across its lifecycle.",
      "• Carlo Enforcement: Monitors uptime, consistency, safety overrides, and anomaly detection in deployed AI systems.",
    ],
    icon: <FaCheckCircle color="black" size={22} />,
  },
  {
    title: "Security and Privacy:",
    paragraph: [
      "Personal data must be protected and AI systems must prevent misuse.",
      "• Carlo Enforcement: Carlo integrates encryption standards, GDPR-aligned privacy controls, and consent-driven data processing workflows.",
    ],
    icon: <FaLock color="black" size={22} />,
  },
];
export const globalPolicyFrameworksData = [
  {
    title: "🌐 G7 International Guiding Principles for Advanced AI:",
    steps: [
      "Establishes international norms for responsible AI development.",
      "How Carlo Helps: Aligns AI systems with global ethical norms and legal standards.",
    ],
  },
  {
    title: "🏛️ UN Algorithmic Impact Assessment Guidelines:",
    steps: [
      "Framework for assessing the societal impact of AI systems.",
      "How Carlo Helps: Tracks and analyzes AI impacts, ensuring societal benefits.",
    ],
  },
  {
    title: "🌍 World Economic Forum AI Ethics Guidelines:",
    steps: [
      "Promotes ethical AI deployment across industries.",
      "How Carlo Helps: Provides industry-specific compliance solutions for diverse AI applications.",
    ],
  },
  {
    title: "🤝 OECD AI Principles:",
    steps: [
      "Encourages international collaboration on ethical AI practices.",
      "How Carlo Helps: Facilitates cross-border compliance for multinational enterprises.",
    ],
  },
  {
    title: "📜 UNESCO Recommendation on the Ethics of Artificial Intelligence:",
    steps: [
      "Sets global standards for the ethical use of AI technologies.",
      "How Carlo Helps: Integrates UNESCO’s human-centric AI principles into system design and decision-making.",
    ],
  },
  {
    title: "🇪🇺 European Commission's Coordinated Plan on AI:",
    steps: [
      "Boosts innovation and coordination across EU countries.",
      "How Carlo Helps: Aligns systems with EU guidelines to support harmonized deployment.",
    ],
  },
  {
    title:
      "⚖️ Council of Europe Framework Convention on AI, Human Rights, Democracy, and the Rule of Law:",
    steps: [
      "Provides binding legal standards for AI accountability.",
      "How Carlo Helps: Enforces governance models aligned with Council of Europe’s human rights values.",
    ],
  },
];

export const featuresData = [
  {
    heading: "Policy Monitoring & Enforcement",
    flex: true,
    paragraph:
      " Carlo actively monitors every data stream, inference result, and API transaction in real time. Its policy engine uses pre-built and custom compliance rules to detect violations, block unauthorized actions, and enforce global standards automatically.",
    img: "policyrobot.png",
  },
  {
    heading: "Feedback Loops",
    img: "feedbak-robot.png",
    paragraph:
      " Carlo delivers machine-readable feedback for every compliance check. Developers receive JSON-based diagnostics, bias alerts, and recommended fixes that can be integrated directly into CI/CD pipelines.",
  },
  {
    heading: "Multi-Project Scalability",
    flex: true,
    img: "multi-project.png",
    paragraph:
      "Carlo was built for scale. Whether you manage one AI model or hundreds across multiple regions, Carlo provides centralized governance with project-level policy control.",
  },
  {
    heading: "Compliance Dashboard",
    img: "dashboard.png",
    paragraph:
      "Carlo’s real-time compliance dashboard gives developers, compliance officers, and executives instant visibility into compliance health. Track violations, review automated enforcement actions, and generate audit-ready reports with a single click.",
  },
  {
    heading: "Cross-Platform Integration",
    flex: true,
    img: "cross-platfrom.png",

    paragraph:
      " Carlo plugs directly into your development ecosystem. With SDKs, APIs, and containerized deployment, it fits into any modern AI stack without requiring workflow changes.",
  },
];

export const KeyfeaturesData = [
  {
    heading: "Policy Monitoring & Enforcement",
    paragraph:
      "Ensure consistent compliance across your AI systems with automated policy checks and real-time enforcement. Stay ahead of regulatory requirements and maintain governance at scale.",
    img: "/feature1_2x_tjihji.png",
    flex: false,
  },
  {
    heading: "Cross-Platform Integration",
    paragraph:
      "Seamlessly integrate with a wide range of platforms, tools, and environments. Carlo PEaaS ensures compatibility across cloud providers, development stacks, and deployment pipelines—enabling a unified compliance workflow wherever your AI runs.",
    img: "/feature2_2x_ztsr7p.png",
    flex: true,
  },
  {
    heading: "Feedback Loops",
    paragraph:
      "Continuously improve model performance and compliance with intelligent feedback loops. Carlo PEaaS captures real-world outcomes and user interactions to refine policies, detect drift, and adapt governance in real time.",
    img: "/feature3_2x_idh2mq.png",
    flex: false,
  },
  {
    heading: "Multi-Project Scalability",
    paragraph:
      "Effortlessly manage compliance across multiple AI projects and teams. Carlo PEaaS is built to scale with your organization, offering centralized policy control, role-based access, and streamlined governance for enterprise-wide deployment.",
    img: "/feature2_2x_ztsr7p.png",
    flex: true,
  },
];

export const featuresInterActive = [
  {
    featureName: "Step 1: Data Monitoring",
    featureDetails: [
      "Carlo continuously inspects every incoming and outgoing data stream in real time to detect anomalies, data drift, or bias—ensuring clean, context-aware input before models make critical decisions.",
    ],
    icon: <FaBrain color="black" size={25} />,
  },
  {
    featureName: "Step 2: Policy Enforcement",
    featureDetails: [
      " Once models are active, Carlo enforces ethical, legal, and regulatory policies using predefined or custom rules—automatically blocking or flagging outputs that violate fairness, privacy, or safety constraints.",
    ],
    icon: <FaShieldAlt color="black" size={23} />,
  },
  {
    featureName: "Step 3: Feedback & Corrections",
    featureDetails: [
      " Developers receive structured, JSON-based compliance feedback for each flagged issue. This includes reasons for non-compliance and suggestions for retraining, adjustment, or rule refinement to improve ethical performance.",
    ],
    icon: <FaComments color="black" size={23} />,
  },
  {
    featureName: "Step 4: Compliance Assurance",
    featureDetails: [
      "A dynamic dashboard visualizes risk scores, policy violations, and audit trails. It also tracks certification progress, enabling real-time visibility for compliance officers, auditors, and enterprise stakeholders alike.",
    ],
    icon: <FaFileAlt color="black" size={23} />,
  },
];

export const featuresInternational = [
  {
    featureName: "G7 International Guiding Principles for Advanced AI",
    featureDetails: [
      "Provides a globally recognized framework for responsible AI development, deployment, and governance.",
      "How Carlo Helps: Ensures AI systems follow G7-aligned ethical standards, enhance transparency, and meet global legal obligations.",
    ],
    icon: <FaGlobe color="black" size={22} />,
  },
  {
    featureName: "UN Algorithmic Impact Assessment Guidelines",
    featureDetails: [
      "Outlines a global framework for evaluating the societal, ethical, and human rights impacts of AI systems.",
      "How Carlo Helps: Monitors and assesses AI performance to maximize public benefit, reduce risks, and maintain alignment with UN principles.",
    ],
    icon: <FaGavel color="black" size={20} />,
  },
  {
    featureName: "World Economic Forum AI Ethics Guidelines",
    featureDetails: [
      "Promotes ethical, transparent, and inclusive AI adoption across industries worldwide.",
      "How Carlo Helps: Delivers tailored compliance solutions for industry-specific AI applications.",
    ],
    icon: <FaUsers color="black" size={21} />,
  },
  {
    featureName: "OECD AI Principles",
    featureDetails: [
      "Encourages cross-border collaboration and adoption of ethical AI practices.",
      "How Carlo Helps: Supports multinational enterprises in achieving consistent, global AI compliance.",
    ],
    icon: <FaHandshake color="black" size={22} />,
  },
  {
    featureName:
      "UNESCO Recommendation on the Ethics of Artificial Intelligence",
    featureDetails: [
      "Defines human-centered standards for ethical AI use across the globe.",
      "How Carlo Helps: Embeds UNESCO’s ethical principles into AI system design and governance.",
    ],
    icon: <FaScroll color="black" size={21} />,
  },
  {
    featureName: "European Commission's Coordinated Plan on AI",
    featureDetails: [
      "Drives AI innovation and coordinated policy implementation across EU member states.",
      "How Carlo Helps: Aligns systems with EU policies to enable harmonized, cross-country AI deployment.",
    ],
    icon: <FaLandmark color="black" size={21} />,
  },
  {
    featureName:
      "Council of Europe Framework Convention on AI, Human Rights, Democracy, and the Rule of Law",
    featureDetails: [
      "Establishes binding legal standards for AI accountability and human rights protection.",
      "How Carlo Helps: Implements governance models that fully comply with Council of Europe values.",
    ],
    icon: <FaBalanceScale color="black" size={21} />,
  },
];

export const featuresGlobalAI = [
  {
    featureName: "European Union AI Act",
    featureDetails: [
      "Creates a comprehensive legal framework for building and deploying trustworthy AI.",
      "How Carlo Helps: Continuously monitors high-risk AI systems to ensure full compliance with EU regulations.",
    ],
    icon: <FaBalanceScale color="black" size={21} />,
  },
  {
    featureName: "Ethics Guidelines for Trustworthy AI (EU)",
    featureDetails: [
      "Promotes AI that is transparent, accountable, and fair across all use cases.",
      "How Carlo Helps: Automates bias detection and improves model explainability for greater trust.",
    ],
    icon: <FaSearch color="black" size={21} />,
  },
  {
    featureName: "UNESCO Recommendation on AI Ethics",
    featureDetails: [
      "Encourages responsible AI adoption in education, research, and policymaking.",
      "How Carlo Helps: Delivers actionable insights to maintain ethical integrity throughout AI lifecycles.",
    ],
    icon: <FaGlobe color="black" size={21} />,
  },
  {
    featureName: "OECD AI Principles",
    featureDetails: [
      "Ensures AI technologies uphold human rights, fairness, and democratic values.",
      "How Carlo Helps: Monitors compliance with OECD benchmarks and provides targeted corrective guidance.",
    ],
    icon: <FaScroll color="black" size={21} />,
  },
  {
    featureName: "IEEE Global Initiative on AI Ethics",
    featureDetails: [
      "Focuses on embedding ethics into the design, development, and deployment of intelligent systems.",
      "How Carlo Helps: Applies ethical safeguards during every stage of AI system creation and operation.",
    ],
    icon: <FaRobot color="black" size={21} />,
  },
  {
    featureName: "Council of Europe's Framework Convention on AI",
    featureDetails: [
      "Defines binding legal standards for AI governance and protection of human rights.",
      "How Carlo Helps: Aligns AI systems with human-centric governance and accountability principles.",
    ],
    icon: <FaLandmark color="black" size={21} />,
  },
  {
    featureName: "Algorithmic Justice League Guidelines",
    featureDetails: [
      "Advocates for fairness, accountability, and transparency in algorithmic decision-making.",
      "How Carlo Helps: Identifies and corrects biases in datasets and algorithms to ensure equitable outcomes.",
    ],
    icon: <FaSyncAlt color="black" size={21} />,
  },
  {
    featureName: "Japan's AI Governance Guidelines",
    featureDetails: [
      "Sets forth principles for responsible and transparent AI governance in Japan.",
      "How Carlo Helps: Delivers customized compliance strategies for Japan-specific AI applications.",
    ],
    icon: <FaFlag color="black" size={21} />,
  },
  {
    featureName: "UK National AI Strategy",
    featureDetails: [
      "Promotes AI-driven innovation while safeguarding ethical and regulatory standards.",
      "How Carlo Helps: Tracks and supports compliance throughout the AI innovation process.",
    ],
    icon: <FaLightbulb color="black" size={21} />,
  },
  {
    featureName: "Singapore Model AI Governance Framework",
    featureDetails: [
      "Provides practical guidance for enhancing AI transparency and explainability.",
      "How Carlo Helps: Improves system clarity with in-depth reporting and documentation.",
    ],
    icon: <FaBook color="black" size={21} />,
  },
];

export const aiEthicsPrinciples = [
  {
    featureName: "Transparency",
    featureDetails: [
      "AI systems must be understandable to all.",
      "Carlo Enforcement: Carlo logs AI decisions and makes models explainable through visualization dashboards, real-time traceability, and model lineage audits.",
    ],
    icon: <FaEye color="black" size={21} />,
  },
  {
    featureName: "Inclusion",
    featureDetails: [
      "AI must serve every human being and respect all social groups.",
      "Carlo Enforcement: Carlo detects exclusionary patterns in training data and monitors demographic disparities in outputs, flagging any systemic bias.",
    ],
    icon: <FaUsers color="black" size={21} />,
  },
  {
    featureName: "Responsibility",
    featureDetails: [
      "Designers and users of AI must take responsibility for their systems.",
      "Carlo Enforcement: Enforces accountable version control, tracks who made each model or data change, and binds developers to a responsibility framework with real-time feedback.",
    ],
    icon: <FaClipboardCheck color="black" size={21} />,
  },
  {
    featureName: "Impartiality",
    featureDetails: [
      "AI must not foster bias or discrimination.",
      "Carlo Enforcement: Uses fairness metrics, demographic parity testing, and bias detection algorithms to ensure outputs are equitable and unbiased.",
    ],
    icon: <FaBalanceScaleRight color="black" size={21} />,
  },
  {
    featureName: "Reliability",
    featureDetails: [
      "AI must operate securely and consistently across its lifecycle.",
      "Carlo Enforcement: Monitors uptime, consistency, safety overrides, and anomaly detection in deployed AI systems.",
    ],
    icon: <FaCogs color="black" size={21} />,
  },
  {
    featureName: "Security and Privacy",
    featureDetails: [
      "Personal data must be protected and AI systems must prevent misuse.",
      "Carlo Enforcement: Carlo integrates encryption standards, GDPR-aligned privacy controls, and consent-driven data processing workflows.",
    ],
    icon: <FaLock color="black" size={21} />,
  },
];
