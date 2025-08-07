import Image from "next/image";
import TrustSteps from "../Why-carlo/_subcomp/TrustSteps";
import HeadingReuse from "../_subcomponents/HeadingReuse";
import { trustStepsData } from "../_data/data";
import ContainerProvier from "../About-us/_components/ContainerProvider";
import Underline from "../_subcomponents/UnderLine";

export default function page() {
  return (
    <div className="mt-50 text-foreground max-w-[1200px] mx-auto">
      <h2 className="text-[48px] font-bold text-center">
        Carlo PEaaS Enforcing Sharia-Compliant <br /> AI Ethics in the Modern
        World
      </h2>
      <Underline />
      <p className="text-[22px] text-center max-w-[800px] mx-auto ">
        Carlo PEaaS: Ethical AI and Data Protection Compliance with Global
        Standards like GDPR, CCPA, and the EU AI Act Carlo PEaaS Enforcing
        Sharia-Compliant AI Ethics in the Modern World
      </p>
      <section className="w-full max-w-[1200px]  mx-auto justify-between text-foreground pb-32 pt-20">
        <div className="w-full ">
          <HeadingReuse heading={"Introduction: The Rome Call for AI Ethics"} />
          <p className="font-normal text-[22px] mt-6">
            As artificial intelligence expands its footprint across key sectors
            such as finance, healthcare, governance, and education,
            organizations in the Muslim world are increasingly seeking solutions
            that comply with Islamic ethical and legal principles. Islamic
            ethics, deeply rooted in the objectives of Sharia (Maqasid
            al-Sharia), demand fairness, transparency, and avoidance of harm
            while preserving human dignity, community well-being, and
            faith-based values. Carlo PEaaS offers a robust ethical governance
            framework tailored to align AI systems with Sharia compliance. It
            provides real-time enforcement of Islamic jurisprudence across data
            use, model logic, decision outcomes, and application contexts.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10">
            {/* {trustStepsData.map((item, index) => (
              <TrustSteps key={index} title={item.title} steps={item.steps} />
            ))} */}
            <ContainerProvier
              title={
                "1. Maqasid al-Sharia (The Higher Objectives of Islamic Law):"
              }
              paragraph={[
                "The preservation of religion, life, intellect, lineage, and property is foundational to all ethical decision-making in Islamic systems.",
                "• Carlo Enforcement: Carlo deploys AI value-alignment metrics and risk assessments that evaluate whether model outputs jeopardize these protected domains. It halts deployment of systems that violate these principles until corrective action is taken.",
              ]}
            />

            <ContainerProvier
              title={"2. Adl and Ihsan (Justice and Benevolence):"}
              paragraph={[
                "Equity, compassion, and the avoidance of exploitation are core to Islamic values.",
                "• Carlo Enforcement: Carlo audits output distributions in AI applications for discriminatory patterns. Whether in lending decisions or employment recommendations, it flags outputs that exhibit structural injustice.",
              ]}
            />

            <ContainerProvier
              title={"3. Darar (Avoidance of Harm):"}
              paragraph={[
                "Harm, whether physical, social, or psychological, must be proactively avoided.",
                "• Carlo Enforcement: Risk-sensitive applications like autonomous vehicles, biometric surveillance, and medical diagnostics are run through Carlo's ethical safety module that calculates risk scores and requires human oversight at defined thresholds.",
              ]}
            />

            <ContainerProvier
              title={"4. Halal and Haram (Permissibility Framework):"}
              paragraph={[
                "AI must not be used to support or promote haram (prohibited) activities such as gambling, interest-based financial services (riba), alcohol, pornography, or unethical marketing.",
                "• Carlo Enforcement: Carlo includes a contextual classifier trained to identify and restrict integration with haram content APIs, datasets, or user workflows. It also enables domain whitelisting to restrict AI use to halal-aligned business processes.",
              ]}
            />

            <ContainerProvier
              title={"5. Amanah and Taklif (Trust and Accountability):"}
              paragraph={[
                "The ethical trust placed on developers, engineers, and decision-makers must be preserved.",
                "• Carlo Enforcement: Every change to the AI system—from dataset manipulation to final output—is logged with identity tracking and tamper-proof logs. This creates full accountability and governance transparency for Sharia compliance reviews.",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
