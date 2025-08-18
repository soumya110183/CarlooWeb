import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ComplianceCard from "./ComplianceCard";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";


export default function PricingInformation(){

 const globalCompliancePlan = [
  {
    price: '$6.99/mo',
    title: 'Seed Compliance',
    description: 'Perfect for small teams starting their compliance journey.',
    features: [
      { name: 'Basic GDPR & CCPA support', available: true },
      { name: 'Real-time monitoring (2 projects)', available: true },
      { name: 'Email Support', available: true },
      { name: 'Feedback loops', available: false },
      { name: 'Compliance dashboard', available: false },
    ],
  },
  {
    price: '$29/mo',
    title: 'Growth Compliance',
    description: 'For growing teams needing expanded regional coverage and insights.',
    features: [
      { name: 'Everything in Seed', available: true },
      { name: 'Multi-region support (GDPR, LGPD, PIPL)', available: true },
      { name: 'Feedback loops & basic developer alerts', available: true },
      { name: 'Compliance dashboard', available: true },
      { name: 'Priority Email Support', available: false },
    ],
  },
  {
    price: '$49/mo',
    title: 'Pro Compliance',
    description: 'Designed for maturing companies in regulated sectors like health, fintech, and retail.',
    features: [
      { name: 'All Growth features', available: true },
      { name: 'Unlimited projects', available: true },
      { name: 'Audit logs', available: true },
      { name: 'Role-based access (up to 5 users)', available: true },
      { name: 'Priority Phone & Email Support', available: true },
    ],
  },
  {
    price: '$199/mo',
    title: 'Infinite Compliance',
    description: 'Complete AI ethics compliance suite with advanced customization.',
    features: [
      { name: 'All Global features', available: true },
      { name: 'On-premises deployment', available: true },
      { name: 'Custom rule engine', available: true },
      { name: 'AI-powered continuous validation', available: true },
      { name: '24/7 Dedicated Support & Onboarding', available: true },
      { name: 'Internal team training', available: true },
    ],
  },
];
    return(
        <section className="w-full max-w-[1200px]  mx-auto  text-foreground pb-32">
             <div className="w-full max-w-[570px]">
                <HeadingReuse heading={"Pricing Information"} />
           <ParagraphReUse paragraph={" AI is the broader concept of machines being able to carry out tasks in a way that would normally require human intelligence."} />
            </div>
            <div className="w-full  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:mx-auto gap-5 mt-10" >
            {globalCompliancePlan.map((card,index)=>(

  
     <ComplianceCard plan={card} key={index}/>

            ))}
               </div>
            
        </section>
    )
}