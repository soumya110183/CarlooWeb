import Image from "next/image";
import TrustSteps from "../Why-carlo/_subcomp/TrustSteps";
import HeadingReuse from "../_subcomponents/HeadingReuse";
import { trustStepsData } from "../_data/data";
import ContainerProvier from "../About-us/_components/ContainerProvider";
import Underline from "../_subcomponents/UnderLine";

export default function page() {
  return (
    <div className="mt-50 text-foreground overflow-y-hidden px-10 ">
      <h2 className="text-[48px] font-bold text-center">
        Carlo PEaaS: Enforcing Rome Call for <br /> AI Ethics in Every AI
        Project
      </h2>
      <Underline />
      <p className="text-[22px] text-center w-full max-w-[800px] mx-auto">
        Carlo PEaaS: Ethical AI and Data Protection Compliance with Global
        Standards like GDPR, CCPA, and the EU AI Act.
      </p>
      <section className="w-full max-w-[1200px]  mx-auto justify-between text-foreground pb-32 pt-20">
        <div className="w-full ">
          <HeadingReuse heading={"Introduction: The Rome Call for AI Ethics"} />
          <p className="font-normal text-[22px] mt-6">
            The Rome Call for AI Ethics is a landmark declaration initiated by
            the Pontifical Academy for Life, endorsed by global tech leaders and
            institutions including Microsoft, IBM, and the FAO. It lays the
            foundation for a shared commitment to ensuring AI technologies
            respect human dignity, promote the common good, and operate within
            ethical and legal boundaries. Carlo PEaaS (Policy Enforcement as a
            Service) by Algorethics is the first-of-its-kind AI compliance
            framework designed to enforce the Rome Call&apos;s principles across
            AI applications—whether in healthcare, finance, education, robotics,
            or public policy. By monitoring, analyzing, and guiding AI systems
            in real time, Carlo bridges the gap between idealistic ethical
            standards and day-to-day development.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10">
            {/* {trustStepsData.map((item, index) => (
              <TrustSteps key={index} title={item.title} steps={item.steps} />
            ))} */}
            <ContainerProvier
              title={"Transparency:"}
              paragraph={[
                "AI systems must be understandable to all.",
                "• Carlo Enforcement: Carlo logs AI decisions and makes models explainable through visualization dashboards, real-time traceability, and model lineage audits.",
              ]}
            />

            <ContainerProvier
              title={"Inclusion:"}
              paragraph={[
                "AI must serve every human being and respect all social groups.",
                "• Carlo Enforcement: Carlo detects exclusionary patterns in training data and monitors demographic disparities in outputs, flagging any systemic bias.",
              ]}
            />

            <ContainerProvier
              title={"Responsibility:"}
              paragraph={[
                "Designers and users of AI must take responsibility for their systems.",
                "• Carlo Enforcement: Enforces accountable version control, tracks who made each model or data change, and binds developers to a responsibility framework with real-time feedback.",
              ]}
            />

            <ContainerProvier
              title={"Impartiality:"}
              paragraph={[
                "AI must not foster bias or discrimination.",
                "• Carlo Enforcement: Uses fairness metrics, demographic parity testing, and bias detection algorithms to ensure outputs are equitable and unbiased.",
              ]}
            />

            <ContainerProvier
              title={"Reliability:"}
              paragraph={[
                "AI must operate securely and consistently across its lifecycle.",
                "• Carlo Enforcement: Monitors uptime, consistency, safety overrides, and anomaly detection in deployed AI systems.",
              ]}
            />

            <ContainerProvier
              title={"Security and Privacy:"}
              paragraph={[
                "Personal data must be protected and AI systems must prevent misuse.",
                "• Carlo Enforcement: Carlo integrates encryption standards, GDPR-aligned privacy controls, and consent-driven data processing workflows.",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
