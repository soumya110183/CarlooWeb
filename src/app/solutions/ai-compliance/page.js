import Underline from "@/app/_subcomponents/UnderLine";

import CarloCompliance from "./_components/Carlo-compliance";
import WhatisAi from "./_components/WhatisAi";
import WhoCanBenefit from "./_components/WhoCanBenefit";
import BenefitOfAi from "./_components/BenefitofAi";
import RealTimeUseCases from "./_components/RealTimeUseCases";
import CarloPipelineIntegration from "./_components/CarloPipelineIntegration";
import ComplianceAsAService from "./_components/ComplianceAsAService";
import StartForFree from "./_components/StartForFree";
import JoinEthicalAIMovement from "./_components/JoinAiEthicalMovement";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default function Page() {
  return (
    <div className="mt-50 max-w-[1200px] text-foreground overflow-hidden lg:px-10 px-5 mx-auto ">
      <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center">
        Building Responsible AI: Carlo&apos;s Comprehensive AI Compliance
        Platform
      </h2>
      <Underline />
      <ParagraphReUse
        paragraph={
          "Artificial Intelligence is transforming industries from healthcare to retail but also brings challenges like algorithmic bias, opaque decisions, data misuse, and shifting global regulations—leading to lawsuits, fines, and brand damage. To succeed in this landscape, companies need responsible, ethical, and compliant AI practices. Algorethics Carlo delivers real-time, structured compliance to ensure AI trustworthiness across the model lifecycle, whether for LLMs, healthcare vision systems, or e-commerce recommendations."
        }
        center={true}
      />

      <WhatisAi />

      <CarloCompliance />

      <WhoCanBenefit />
      <BenefitOfAi />

      <RealTimeUseCases />
      <CarloPipelineIntegration />

      <ComplianceAsAService />
      <StartForFree />

      <JoinEthicalAIMovement />
    </div>
  );
}
