import ParagraphReUse from "../_subcomponents/ParagraphReUse";
import Underline from "../_subcomponents/UnderLine";
import SubScribe from "../about/_components/SubScribe";

import ComplianceFeatureTable from "./_components/FeatureTable";
import PricingInformation from "./_components/PricingInformation";
import ComplianceTable from "./_components/TierTable";

export const metadata = {
  title: "Pricing: Carlo PEaaS Plans for Every Business Need",
  description: "Discover Carlo PEaaS pricing plans designed for startups, growing businesses, and enterprises. Choose scalable, cost-effective options to access AI compliance, ethical governance, and real-time monitoring features tailored to your needs.",
  keywords: "Carlo PEaaS, pricing plans, AI compliance, ethical AI, scalable pricing, enterprise compliance, startup AI solutions, real-time monitoring, tiered pricing, cost-effective AI governance",
};


export default function page() {
  return (
    <div>
      <section className="w-full max-w-[1200px] mx-auto mt-35 text-foreground overflow-hidden lg:px-10 px-5">
        <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center">
          Simple, Scalable Pricing for Every Need
        </h2>
        <Underline />
        <ParagraphReUse
          paragraph={
            "With Carlo PEaaS, you get flexible pricing plans designed to suit startups, growing businesses, and large enterprises. Our tiered pricing ensures you only pay for the features and services you need, making compliance easy, scalable, and cost-effective."
          }
        />
        {/* <ComplianceTable /> */}
        <ComplianceFeatureTable />
        <PricingInformation />
        <SubScribe />
      </section>
    </div>
  );
}
