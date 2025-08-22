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

  return (
    <div>
      <EditBlog
        blogTitle={blogDetails.title}
        adminNames={blogDetails.adminName}
        images={blogDetails.image}
        blogId={blogDetails._id.toString()}
        blocks={blogDetails.blocks}
        currently={currently}
      />
    </div>
  );
}
