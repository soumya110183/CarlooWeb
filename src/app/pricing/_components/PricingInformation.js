import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ComplianceCard from "./ComplianceCard";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default async function PricingInformation() {
  const res = await fetch("https://carlo.algorethics.ai/api/pricing", {
    cache: "no-store", // always fetch fresh
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pricing");
  }

  const apiData = await res.json();

  const descriptions = {
    seed: "Perfect for small teams starting their compliance journey.",
    growth:
      "For growing teams needing expanded regional coverage and insights.",
    pro: "Designed for maturing companies in regulated sectors like health, fintech, and retail.",
    global: "Complete AI ethics compliance suite with advanced customization.",
    infinite:
      "Enterprise-level compliance with dedicated consultants and on-premise deployment.",
  };

  const globalCompliancePlan = apiData.data.map((plan) => {
    return {
      tier: plan.tier,

      priceInteger: plan.price,
      price: `$${plan.price}/mo`,
      title: `${
        plan.tier.charAt(0).toUpperCase() + plan.tier.slice(1)
      } Compliance`,
      description: descriptions[plan.tier] || "Compliance plan for AI ethics.",
      features: [
        ...plan.features.map((f) => ({ name: f, available: true })),
        plan.real_time_monitoring && {
          name: "Real-time monitoring",
          available: true,
        },
        plan.projects_supported && {
          name: `Projects supported: ${plan.projects_supported}`,
          available: true,
        },
        plan.feedback_loops && { name: "Feedback loops", available: true },
        plan.compliance_dashboard && {
          name: "Compliance dashboard",
          available: true,
        },

        plan.custom_features && { name: "Custom features", available: true },
        plan.on_premises_deployment && {
          name: "On-premises deployment",
          available: true,
        },
        plan.dedicated_support && {
          name: `Support: ${plan.dedicated_support.replace(/_/g, " ")}`,
          available: true,
        },
      ].filter(Boolean),
    };
  });


  return (
    <section className="w-full max-w-[1200px] mx-auto text-foreground pb-32">
      <div className="w-full max-w-[570px]">
        <HeadingReuse heading="Pricing Information" />
        <ParagraphReUse paragraph="AI is the broader concept of machines being able to carry out tasks in a way that would normally require human intelligence." />
      </div>

      <div className="w-full grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:mx-auto gap-5 mt-10">
        {globalCompliancePlan.map((card, index) => (
          <ComplianceCard plan={card} key={index} />
        ))}
      </div>
    </section>
  );
}
