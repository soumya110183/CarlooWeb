import Underline from "../_subcomponents/UnderLine";
import BlogCard from "../case-studies/_Components/BlogContainer";

import CardSlider from "../case-studies/_Components/SwiperBlogs";

export default function page(){
    return(
        <div>
      <section className="w-full mx-auto mt-35 text-white  max-w-[1280px] px-4 ">
        <h2 className="text-[48px] font-bold text-center">
          Blog
        </h2>
        
        <Underline />
        <p className="text-[22px] text-center w-full max-w-[800px] mx-auto ">
          Carlo PEaaS: Ethical AI and Data Protection Compliance with Global Standards like GDPR, CCPA, and the EU AI Act
        </p>
        <div className="w-full">
         <BlogCard />
        </div>
        </section>
        </div>
    )
}