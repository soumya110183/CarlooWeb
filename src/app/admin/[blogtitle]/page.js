import { connectToDatabase } from "@/lib/mongodb";
import EditBlog from "../_subComponents/EditBlog";
import blog from "@/modals/blog";
import casestudy from "@/modals/casestudy";

export default async function page({ params, searchParams }) {
  const currently = searchParams.content;
  const ContentTitle = params.blogtitle;

  await connectToDatabase();

  let blogDetails = null; 

  if (currently === "blogs") {
    blogDetails = await blog.findOne({ slug: ContentTitle }).lean();
  } 
  if (currently === "casestudy") {
    blogDetails = await casestudy.findOne({ slug: ContentTitle }).lean();
  }

  if (!blogDetails) {
    return <div>Content not found!</div>;
  }
  
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
    <div className="sm:px-10 px-5">
      <EditBlog
        blogTitle={serializedBlog.title}
        adminNames={serializedBlog.adminName}
        images={serializedBlog.image}
        blogId={serializedBlog._id}
        blocks={serializedBlog.blocks}
        currently={currently}
      />
    </div>
  );
}
