import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import SubScriptionForm from "@/app/_subcomponents/SubScriptionForm";

export default function SubScribe(){
    return (
        <section className="w-full max-w-[1000px]  mx-auto  text-foreground lg:pb-32 pb-15">
      <h2 className=" font-bold text-center lg:text-[48px] text-[28px] sm:text-[32px]">Subscribe Here</h2>
      <ParagraphReUse paragraph={"Stay updated with the latest news, insights, and special offers by subscribing to our newsletter. Don't miss out—join now"} center={true} />
      <div className="mt-10">
        <SubScriptionForm  maxw={"560px"}/>
      </div>
      
      </section>
    )
}