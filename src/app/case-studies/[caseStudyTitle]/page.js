import Underline from "@/app/_subcomponents/UnderLine";
import BlogContent from "@/app/blog/[blogid]/BlogContent";
import { connectToDatabase } from "@/lib/mongodb";
import casestudy from "@/modals/casestudy";


export default async function page({ params }) {
const caseStudyTitle =params.caseStudyTitle;



  await connectToDatabase();
  
  const casestudyDetails = await casestudy.findOne({ slug: caseStudyTitle }).lean();
 



  return (
    <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] px-4 pb-30">
      <h2 className="text-[48px] font-bold text-center">
        Case Study
      </h2>
      <Underline />
      {/* <p className="text-[22px] text-center">
        Complete the form, and our team will reach out within 24 hours.
      </p> */}
      <BlogContent
             mainImage={casestudyDetails.image}
             title={casestudyDetails.title}
             adminName={casestudyDetails.adminName}
             blocks={casestudyDetails.blocks}
             adminPhoto={casestudyDetails.adminPhoto} 
           />
    </section>
  );
}
