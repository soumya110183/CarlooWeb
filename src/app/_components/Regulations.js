import ScrollHeading from "../_subcomponents/ScrollHeading";

export default function Regulation(){
    return(
        <section>
            <ScrollHeading heading={"Regulations"} paragraph={"Regulations we cover and keep updating"} />
            <div className="w-full max-w-[1200px] mx-auto">
               <div className="w-[150px] h-[150px] flex justify-center items-center rounded-full p-[4px] border border-[#808080]">
  <div className="w-[120px] h-[120px] rounded-full bg-[#180d49] p-[10px]">
    <img
      src="/EU_AI-150x150.jpg"
      alt=""
      className="w-full h-full rounded-full object-cover"
    />
    
  </div>
</div>
            </div>
    


        </section>
    )
}