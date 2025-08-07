import SubScriptionForm from "@/app/_subcomponents/SubScriptionForm";

export default function SubScribe(){
    return (
        <section className="w-full max-w-[1000px]  mx-auto  text-foreground pb-32">
      <h2 className="text-[48px] font-bold text-center">Subscribe Here</h2>
      <p className="text-[22px] font-medium text-center">
        Stay updated with the latest news, insights, and special offers by subscribing to our newsletter. Don&apos;t miss out—join now
      </p>
      <div className="mt-10">
        <SubScriptionForm  maxw={"560px"}/>
      </div>
      
      </section>
    )
}