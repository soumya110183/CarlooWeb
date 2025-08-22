import Underline from "@/app/_subcomponents/UnderLine";
import BackButton from "@/app/blog/[blogid]/BackButton";
import BlogContent from "@/app/blog/[blogid]/BlogContent";
import { connectToDatabase } from "@/lib/mongodb";
import casestudy from "@/modals/casestudy";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";


export default async function page({ params }) {

  
const caseStudyTitle =params.caseStudyTitle;



  await connectToDatabase();
  
  const casestudyDetails = await casestudy.findOne({ slug: caseStudyTitle }).lean();

   const serializedBlog = {
    ...casestudyDetails,
    _id: casestudyDetails._id.toString(),
    comments: casestudyDetails.comments?.map((c) => ({
      ...c,
      _id: c._id.toString(),
      createdAt: c.createdAt.toISOString(),
    })),
  };
 


console.log(serializedBlog)
  return (
    <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] px-4 pb-30">
      <h2 className="text-[48px] font-bold text-center">
        Case Study
      </h2>
      <Underline />
      <div className="flex justify-end">
 <BackButton  path={"case-studies"} />
</div>
    <BlogContent
            mainImage={serializedBlog.image}
            title={serializedBlog.title}
            adminName={serializedBlog.adminName}
            blocks={serializedBlog.blocks}
            adminPhoto={serializedBlog.adminPhoto}
            blogId={serializedBlog._id} 
            comments={serializedBlog.comments} 
            casestudy={true}
          />
    </section>
  );
}
