import Underline from "../_subcomponents/UnderLine";
import BlogCard from "./_Components/BlogContainer";

import CaseStudy from "./_Components/CaseStudiesContainer";

export default async function page(){

    const res = await fetch("https://carlo-peass-71nb.vercel.app/api/casestudy", {
    cache: "no-store",
  });

  const casestudy = await res.json();
  console.log(casestudy)
    return(
        <div>
          <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] overflow-y-hidden px-10 pb-30">
          <h2 className="text-[48px] font-bold text-center">
                 Case Studies
               </h2>
               
               <Underline />
        <p className="text-[22px] text-center w-full max-w-[800px] mx-auto ">
          Carlo PEaaS: Ethical AI and Data Protection Compliance with Global Standards like GDPR, CCPA, and the EU AI Act
        </p>
         <div className="w-full max-w-[1200px] mt-10 grid grid-cols-3 gap-10 shrink-0 ">
                  {casestudy.map((casestudy) => (
                            <BlogCard key={casestudy._id} casestudy={casestudy} />
                          ))}
                </div>
        </section>
        </div>
    )
}