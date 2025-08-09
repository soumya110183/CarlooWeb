import Image from "next/image";

import HeadingReuse from "../_subcomponents/HeadingReuse";
import { islamicEthicsPrinciples} from "../_data/data";
import ContainerProvier from "../About-us/_components/ContainerProvider";
import Underline from "../_subcomponents/UnderLine";
import ShariaContent from "./ShariaContent";

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
                {islamicEthicsPrinciples.map((item, index) => (
                    <ContainerProvier
                      key={index}
                      title={item.title}
                      icon={item.icon}
                      paragraph={item.paragraph}
                    />
                  ))}
          </div>
          <ShariaContent />
        </div>
      </section>
    </div>
  );
}
