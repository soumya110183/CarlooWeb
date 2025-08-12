import { connectToDatabase } from "@/lib/mongodb";
import blog from "@/modals/blog";


import Underline from "@/app/_subcomponents/UnderLine";
import BlogContent from "./BlogContent";

export default async function page({ params }) {
  const blogTitle = params.blogid;

  await connectToDatabase();

  const blogDetails = await blog.findOne({ slug: blogTitle }).lean();

  if (!blogDetails) {
   
    return <p>Blog not found</p>;
  }

  return (
    <section className="w-full mx-auto mt-35 text-foreground max-w-[1000px] px-4 pb-30">
      <h2 className="text-[48px] font-bold text-center">blog</h2>
     
      <Underline />

    
      <BlogContent
        mainImage={blogDetails.image}
        title={blogDetails.title}
        adminName={blogDetails.adminName}
        blocks={blogDetails.blocks} 
      />
    </section>
  );
}
