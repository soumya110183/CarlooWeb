import Underline from "../_subcomponents/UnderLine";
import SubScribe from "../About-us/_components/SubScribe";
import ComplianceFeatureTable from "./_components/FeatureTable";
import PricingInformation from "./_components/PricingInformation";
import ComplianceTable from "./_components/TierTable";

export default function page(){
  

  
    return(
        <div>
            <section className="w-full max-w-[1200px] mx-auto mt-35 text-foreground overflow-y-hidden lg:px-10 px-5">
        <h2 className="text-[48px] font-bold text-center">
          Simple, Scalable Pricing for Every Need
        </h2>
        <Underline />
        <p className="text-[22px] text-center max-w-[800px] mx-auto text-foreground">
          With Carlo PEaaS, you get flexible pricing plans designed to suit startups, growing businesses, and large enterprises. Our tiered pricing ensures you only pay for the features and services you need, making compliance easy, scalable, and cost-effective.
        </p>
        {/* <ComplianceTable /> */}
        <ComplianceFeatureTable />
        <PricingInformation />
        <SubScribe />
        </section>
        </div>
    )
}