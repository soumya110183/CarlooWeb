import { targetAudienceData } from "@/app/_data/data";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ContainerProvier from "@/app/About-us/_components/ContainerProvider";
import Image from "next/image";

export default function WhoisThis(){
    return(
         <section className="w-full max-w-[1200px] flex  items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 pt-32 ">
               
              
               <div className="w-full ">
                 <HeadingReuse heading={"Who Is This For?"} />
                 
                 <p className="font-normal text-[20px] leading-relaxed mt-4">
                   Our bundled RAK DAO + Algorethics offering is ideal for:
                 </p>
         
                
               <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
                      {targetAudienceData.map((item, index) => (
                       <ContainerProvier
                         key={index}
                         title={item.title}
                         paragraph={item.paragraph}
                         icon={item.icon}
                       />
                     ))}
                     </div>
               </div>
             </section>
    )
}