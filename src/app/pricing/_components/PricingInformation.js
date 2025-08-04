import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ComplianceCard from "./ComplianceCard";
import CardSlider from "./SwiperSliderPrice";

export default function PricingInformation(){

    const globalCompliancePlan = {
  price: '$89',
  title: 'Global Compliance',
  description:
    'Enterprise-ready plan for teams managing compliance across regions and platforms.',
  features: [
    'All Pro features',
    'Multi-language support',
    'Integration with AWS, Azure',
    'SLA-backed support',
    'Unlimited Users',
  ],
  buttonText: 'Choose Plan',
  primaryColor: '#5d3fd3',
};
    return(
        <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
             <div className="w-full max-w-[570px]">
                <HeadingReuse heading={"Pricing Information"} />
                <p className="font-normal text-[22px] mt-6">
          AI is the broader concept of machines being able to carry out tasks in a way that would normally require human intelligence.
        </p>
            </div>
<div className="w-full max-w-[600px] ">
   <CardSlider />
</div>
            
        </section>
    )
}