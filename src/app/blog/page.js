import { connectToDatabase } from "@/lib/mongodb";
import Underline from "../_subcomponents/UnderLine";
import BlogCard from "../case-studies/_Components/BlogContainer";
import BlogSecondContainer from "./BlogSecondContainer";
import blog from "@/modals/blog";



export default async function Page() {
  await connectToDatabase();

  
  const blogs = await blog.find().sort({ createdAt: -1 }).lean();
  console.log(blogs)

  return (
    <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] lg:px-10 px-5 lg:pb-32 pb-15">
      <h2 className="text-[48px] font-bold text-center">Blogs</h2>
      <Underline />

      <div className="bg-white flex max-sm:flex-col w-full mx-auto mt-10 gap-6">
    
        {blogs.length > 0 && <BlogCard blog={blogs[0]}/>}

     
        <div className="grid lg:grid-cols-2   grid-cols-1 gap-2">
          {blogs.slice(1).map((blog) => (
            <BlogSecondContainer key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
