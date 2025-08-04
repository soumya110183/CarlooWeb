import SubScribe from "../About-us/_components/SubScribe";
import ComplianceFeatureTable from "./_components/FeatureTable";
import PricingInformation from "./_components/PricingInformation";
import ComplianceTable from "./_components/TierTable";

export default function page(){

  
    return(
        <div>
            <section className="w-full max-w-[1200px] mx-auto mt-35 text-white">
        <h2 className="text-[48px] font-bold text-center">
          Simple, Scalable Pricing for Every Need
        </h2>
        <p className="text-[22px] text-center">
          With Carlo PEaaS, you get flexible pricing plans designed to suit startups, growing businesses, and large enterprises. Our tiered pricing ensures you only pay for the features and services you need, making compliance easy, scalable, and cost-effective.
        </p>
        <ComplianceTable />
        <ComplianceFeatureTable />
        <PricingInformation />
        <SubScribe />
        </section>
        </div>
    )
}