import { connectToDatabase } from "@/lib/mongodb";
import blog from "@/modals/blog";
import { IoArrowBack } from "react-icons/io5";


import Underline from "@/app/_subcomponents/UnderLine";
import BlogContent from "./BlogContent";
import Link from "next/link";

export default async function page({ params }) {
  const blogTitle = params.blogid;

  await connectToDatabase();

  const blogDetails = await blog.findOne({ slug: blogTitle }).lean();

  if (!blogDetails) {
   
    return <p>Blog not found</p>;
  }

  return (
    <section className="w-full mx-auto mt-35 text-foreground max-w-[1000px] px-4 pb-30">
      <h2 className="text-[48px] font-bold text-center">Blogs</h2>
     
      <Underline />
<div className="flex justify-end">
  <Link
    href={"/blog"}
    className="text-[#651FFF] text-base font-bold flex gap-1 items-center 
               transition-all duration-300 hover:text-[#4e12d9] 
               hover:gap-2 rounded-full px-2 py-3 hover:bg-[#651FFF]/10"
  >
    <IoArrowBack size={25} />
    Back to Blogs
  </Link>
</div>

    
      <BlogContent
        mainImage={blogDetails.image}
        title={blogDetails.title}
        adminName={blogDetails.adminName}
        blocks={blogDetails.blocks}
        adminPhoto={blogDetails.adminPhoto} 
      />
    </section>
  );
}
