import { connectToDatabase } from "@/lib/mongodb";
import EditBlog from "../_subComponents/EditBlog";
import blog from "@/modals/blog";


export default async function page({params}){

     const blogTitle = params.blogtitle;
     
 
    
      await connectToDatabase();
    
      const blogDetails = await blog.findOne({ slug: blogTitle }).lean();
      console.log(blogDetails)
    return(
        <div>
            <EditBlog blogTitle={blogDetails.title} adminNames={blogDetails.adminName} images={blogDetails.image}  blogId={blogDetails._id.toString()} blocks={blogDetails.blocks} />
        </div>
    )
}