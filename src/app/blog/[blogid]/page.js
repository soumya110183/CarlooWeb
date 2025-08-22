import { connectToDatabase } from "@/lib/mongodb";
import blog from "@/modals/blog";

import Underline from "@/app/_subcomponents/UnderLine";
import BlogContent from "./BlogContent";

import BackButton from "./BackButton";

export default async function page({ params }) {
  const blogTitle = params.blogid;

  await connectToDatabase();

  const blogDetails = await blog.findOne({ slug: blogTitle }).lean();

  if (!blogDetails) {
    return <p>Blog not found</p>;
  }

  // Convert ObjectId to string
  const serializedBlog = {
    ...blogDetails,
    _id: blogDetails._id.toString(),
    comments: blogDetails.comments?.map((c) => ({
      ...c,
      _id: c._id.toString(),
      createdAt: c.createdAt.toISOString(),
    })),
  };

  return (
    <section className="w-full mx-auto mt-35 text-foreground max-w-[1000px] px-4 pb-30">
      <h2 className="text-[48px] font-bold text-center">Blogs</h2>

      <Underline />
      <BackButton />

      <BlogContent
        mainImage={serializedBlog.image}
        title={serializedBlog.title}
        adminName={serializedBlog.adminName}
        blocks={serializedBlog.blocks}
        adminPhoto={serializedBlog.adminPhoto}
        blogId={serializedBlog._id} 
        comments={serializedBlog.comments} 
        casestudy={false}
      />
    </section>
  );
}
