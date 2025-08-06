import Underline from "../_subcomponents/UnderLine";
import BlogCard from "./_Components/BlogContainer";
import CaseStudy from "./_Components/CaseStudiesContainer";

export default function page(){
    return(
        <div>
          <section className="w-full mx-auto mt-35 text-white  max-w-[1280px] px-4 pb-30">
          <h2 className="text-[48px] font-bold text-center">
                 Case Studies
               </h2>
               
               <Underline />
        <p className="text-[22px] text-center w-full max-w-[800px] mx-auto ">
          Carlo PEaaS: Ethical AI and Data Protection Compliance with Global Standards like GDPR, CCPA, and the EU AI Act
        </p>
         <div className="w-full max-w-[1200px] mt-10 grid grid-cols-3 gap-10 shrink-0 ">
                <CaseStudy />
                <CaseStudy />
                </div>
        </section>
        </div>
    )
}