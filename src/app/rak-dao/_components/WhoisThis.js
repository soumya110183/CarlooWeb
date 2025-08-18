import { targetAudienceData } from "@/app/_data/data";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import ContainerProvier from "@/app/About-us/_components/ContainerProvider";


export default function WhoisThis(){
    return(
         <section className="w-full max-w-[1200px] flex  items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 lg:pt-32 pt-16 ">
               
              
               <div className="w-full ">
                 <HeadingReuse heading={"Who Is This For?"} />
                 
                 <ParagraphReUse paragraph={"Our bundled RAK DAO + Algorethics offering is ideal for:"} />
         
                
               <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 max-sm:gap-5 lg:mt-10 mt-4">
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