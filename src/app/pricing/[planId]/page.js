import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import PriceDetails from "./PriceDetails";

export default function page({params}){

    const oneMonthPrice=params.planId

    console.log(oneMonthPrice)
    return(

<div>
      <section className="w-full max-w-[1200px] mx-auto mt-35 text-foreground overflow-y-hidden lg:px-10 px-5 pb-30">

    <HeadingReuse heading={"Your Cart"} />
    <PriceDetails oneMonthPrice={oneMonthPrice} />
      </section>
</div>
    )
}