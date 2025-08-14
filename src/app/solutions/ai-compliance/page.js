import Image from "next/image";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import { aiCompliancePrinciples } from "@/app/_data/data";
import FeatureAccordions from "@/app/_subcomponents/Accordion";
import Underline from "@/app/_subcomponents/UnderLine";

import CarloCompliance from "./_components/Carlo-compliance";
import WhatisAi from "./_components/WhatisAi";
import WhoCanBenefit from "./_components/WhoCanBenefit";
import BenefitOfAi from "./_components/BenefitofAi";
import RealTimeUseCases from "./_components/RealTimeUseCases";
import CarloPipelineIntegration from "./_components/CarloPipelineIntegration";
import ComplianceAsAService from "./_components/ComplianceAsAService";
import StartForFree from "./_components/StartForFree";

export default function Page() {
  return (
    <div className="mt-50 max-w-[1200px] mx-auto">
    
      <h2 className="text-[48px] font-bold text-center">
        Building Responsible AI: Carlo&apos;s Comprehensive AI Compliance Platform

      </h2>
      <Underline />
      <p className="text-[22px] text-justify max-w-[1200px] mx-auto text-foreground pb-30">
        Artificial Intelligence is transforming industries from healthcare to
        retail but also brings challenges like algorithmic bias, opaque
        decisions, data misuse, and shifting global regulations—leading to
        lawsuits, fines, and brand damage. To succeed in this landscape,
        companies need responsible, ethical, and compliant AI practices.
        Algorethics Carlo delivers real-time, structured compliance to ensure AI
        trustworthiness across the model lifecycle, whether for LLMs, healthcare
        vision systems, or e-commerce recommendations.
      </p>

      
      <WhatisAi />

      <CarloCompliance />

      <WhoCanBenefit />
    <BenefitOfAi />

     
     <RealTimeUseCases />
     <CarloPipelineIntegration />

   
     

 
    <ComplianceAsAService />
    <StartForFree />

      <section className="w-full max-w-[1200px] mx-auto pb-32">
        <HeadingReuse heading={"Join the Ethical AI Movement"} />
        <p className="mt-6 text-lg">
         Over 200 companies globally are using Carlo to build responsible, transparent, and compliant AI. From seed-stage startups to enterprise-scale tech firms, our tools adapt to meet your current and future risk posture.

        </p>
        <h3 className="mt-4"><strong>Ready to embed trust in your technology?</strong></h3>
          <p className="mt-4 text-lg">
         Book a demo. Test your first model. Join the ecosystem shaping the future of AI.

        </p>
        <p className="mt-4">
          📩 Email:{" "}
          <a href="mailto:steve@algorethics.ai" className="text-blue-500">
            steve@algorethics.ai
          </a>
           🌐 Dashboard:{" "}
          <a href="https://policyenforcement.com" className="text-blue-500">
            policyenforcement.com
          </a>
        </p>
      </section>
    </div>
  );
}
