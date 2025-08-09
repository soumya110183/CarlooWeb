"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import MyCard from "./Mycard";
import CardTrust from "./CardTrust";

export default function CardSlider({ trust,compliance }) {
  const data = [
  {
    title: "Rome Call for AI Ethics",
    description: [
      "Carlo proudly aligns with the Rome Call for AI Ethics, a global initiative endorsed by the Vatican to ensure that AI development respects human dignity, fundamental rights, and ethical values.",
      "This framework emphasizes transparency, fairness, and accountability in algorithmic decisions. Carlo enforces these principles through real-time data validation, policy enforcement, and traceable audit logs.",
      "By being certified under this initiative, Carlo supports multi-faith and cross-cultural ethical AI development, helping organizations embed moral responsibility into their AI systems without compromising performance."
    ],
    image: "rome-call.jpg",
  },
  {
    title: "GDPR (General Data Protection Regulation)",
    description: [
      "Carlo is fully compliant with GDPR—Europe’s gold standard in data privacy. It ensures AI systems respect user rights like consent, access, data portability, and the right to be forgotten.",
      " Carlo enforces privacy-by-design and default, preventing unauthorized data access, minimizing exposure, and tracking data lineage throughout the AI lifecycle.",
      "Whether it's during training, inference, or user interaction, Carlo ensures lawful processing, auditability, and secure handling of personal and sensitive data across jurisdictions."
    ],
    image: "gdpr.jpg",
  },
  {
    title: "EU AI Act",
    description: [
      "Carlo is designed to align with the EU AI Act, which classifies AI into risk tiers and mandates obligations for high-risk systems.",
      " It supports automated documentation, model logging, human-in-the-loop checks, and real-time monitoring as required for sectors like finance, HR, and healthcare.",
      "With Carlo, organizations can proactively meet transparency, fairness, accuracy, and safety benchmarks—making it easier to launch AI systems within EU regulatory frameworks."
    ],
    image: "euaiac.png",
  },
  {
    title: "OECD AI Principles",
    description: [
      "Carlo adopts the OECD’s global AI principles of human-centric design, accountability, and robustness. It promotes transparency and sustainability in AI deployment—ensuring inclusive, trustworthy systems that align with democratic values and responsible innovation."
    ],
    image: "oecdlogo-1.png",
  },
  {
    title: "ISO/IEC 38505-1 (Data Governance)",
    description: [
      "Carlo integrates ISO 38505-1 data governance standards into its core—ensuring structured data lifecycle management, traceability, and secure AI pipelines. Enterprises can meet international governance standards with automated control, compliance alerts, and detailed logs."
    ],
    image: "images.png",
  },
  {
    title: "CCPA (California Consumer Privacy Act)",
    description: [
      "Carlo integrates ISO 38505-1 data governance standards into its core—ensuring structured data lifecycle management, traceability, and secure AI pipelines. Enterprises can meet international governance standards with automated control, compliance alerts, and detailed logs."
    ],
    image: "ccpa-california-consumer-privacy-act-600nw-2120684813.webp",
  },

  // New ones start here
  {
    title: "UN Guiding Principles on Business & Human Rights (UNGPs)",
    description: [
      "Carlo is aligned with the UNGPs by embedding human rights respect into every AI decision point. It flags potential harm, detects systemic bias, and ensures algorithmic fairness—making it ideal for responsible enterprises and public sector applications."
    ],
    image: "7b76f2c9993840b6dcd1b078d45ef195_badge.webp",
  },
  {
    title: "NIST AI Risk Management Framework",
    description: [
      "Carlo follows NIST’s risk-based approach to identify, manage, and reduce AI system vulnerabilities. It applies real-time controls, resilience tests, and transparency models to meet U.S. AI safety expectations across both private and federal sectors."
    ],
    image: "nistai.png",
  },
  {
    title: "G7 Hiroshima AI Process",
    description: [
      "Carlo implements G7-aligned controls to promote democratic, secure, and fair AI ecosystems. It enables transparency reporting, ethical drift monitoring, and proactive policy enforcement to build trust in AI globally."
    ],
    image: "G7_Hiroshima_2023.png",
  },
  {
    title: "BIS AI Governance Guidelines (India)",
    description: [
      "Carlo supports India’s BIS guidelines for safe, inclusive, and ethical AI. It ensures AI models respect user privacy, fairness, and national data integrity. Ideal for both startups and government deployments."
    ],
    image: "Bureau_of_Indian_Standards_Logo.svg.png",
  },
  {
    title: "Singapore’s Model AI Governance Framework",
    description: [
      "Carlo integrates Singapore’s explainability, safety, and accountability principles. It helps developers document decisions, ensure human-in-the-loop operations, and control data governance in finance, logistics, and government use cases."
    ],
    image: "Thumbnail-An-Overview-of-Singapores-Model-AI-Governance-Framework-for-Generative-AI.webp",
  },
  {
    title: "UK AI Regulation White Paper",
    description: [
      "Carlo reflects the UK’s contextual AI governance strategy by enabling light-touch regulation with strong risk controls. It allows sector-specific adaptation while keeping core principles like fairness, legality, and auditability in place."
    ],
    image: "Screenshot-2022-07-18-at-11.01.01-678x381.png",
  },
  {
    title: "Brazil’s AI Strategy (Estratégia Brasileira de IA)",
    description: [
      "Aligned with Brazil’s national AI roadmap, Carlo prioritizes human rights, socio-environmental responsibility, and transparent data use. It brings regulatory clarity to AI across agriculture, education, and public service."
    ],
    image: "br.svg",
  },
  {
    title: "Canada’s Algorithmic Impact Assessment (AIA)",
    description: [
      "Carlo supports the AIA framework by automating impact assessments, risk evaluations, and documentation for AI systems used in Canadian government. It streamlines compliance while fostering transparency and accountability."
    ],
    image: "20973642.png",
  },
  {
    title: "IEEE Ethically Aligned Design",
    description: [
      "Inspired by IEEE’s global ethics standard, Carlo embeds fairness, transparency, and well-being into algorithmic logic. It helps developers build AI that benefits humanity without sacrificing safety or responsibility."
    ],
    image: "95eff8e8d705eebae830885f90ac1560aea24aeb-1536x1024.avif",
  },
];


  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      grabCursor={true}
      className="px-4"
    >
      {data.map((card, index) => (
        <SwiperSlide key={index}>
          {trust ? <CardTrust card={card} /> : <MyCard {...card} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
