import KeyFeatures from "../_subcomponents/KeyFeatures";
import ScrollHeading from "../_subcomponents/ScrollHeading";

export default function ThirdSection() {
  return (
    <section>
      <ScrollHeading
        heading="KEY FEATURES"
        paragraph="Discover the powerful features of Carlo PEaaS—real-time compliance monitoring, automated policy enforcement, scalable solutions, and seamless integration with your tech stack. Empower your AI projects with the tools needed to ensure global compliance and ethical AI development"
      />
      <div className="flex flex-col gap-16 text-white">
        <KeyFeatures
          features={{
            heading: "Policy Monitoring & Enforcement",
            paragraph:
              "Ensure consistent compliance across your AI systems with automated policy checks and real-time enforcement. Stay ahead of regulatory requirements and maintain governance at scale.",
            img: "/feature1_2x_tjihji.png",
          }}
        />
        <KeyFeatures
          features={{
            heading: "Cross-Platform Integration",
            paragraph:
              "Seamlessly integrate with a wide range of platforms, tools, and environments. Carlo PEaaS ensures compatibility across cloud providers, development stacks, and deployment pipelines—enabling a unified compliance workflow wherever your AI runs.",
            img: "/feature2_2x_ztsr7p.png",
            flex: true,
          }}
        />
        <KeyFeatures
          features={{
            heading: "Feedback Loops",
            paragraph:
              "Continuously improve model performance and compliance with intelligent feedback loops. Carlo PEaaS captures real-world outcomes and user interactions to refine policies, detect drift, and adapt governance in real time.",
            img: "/feature3_2x_idh2mq.png",
          }}
        />
        <KeyFeatures
          features={{
            heading: "Multi-Project Scalability",
            paragraph:
              "Effortlessly manage compliance across multiple AI projects and teams. Carlo PEaaS is built to scale with your organization, offering centralized policy control, role-based access, and streamlined governance for enterprise-wide deployment.",
            img: "/feature2_2x_ztsr7p.png",
            flex: true,
          }}
        />
      </div>
    </section>
  );
}
