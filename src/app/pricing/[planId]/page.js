import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import PriceDetails from "./PriceDetails";

export default async function page({ params }) {
  const planTitle = params.planId;
  const response = await fetch("https://carlo.algorethics.ai/api/pricing");
  const result = await response.json();

  const data = result.data;

  const proPlan = data.find((plan) => plan.tier === planTitle);

  console.log(proPlan);

  return (
    <div>
      <section className="w-full max-w-[1200px] mx-auto mt-35 text-foreground overflow-y-hidden lg:px-10 px-5 pb-30">
        <HeadingReuse heading={"Your Cart"} />
        <PriceDetails plan={proPlan} />
      </section>
    </div>
  );
}
