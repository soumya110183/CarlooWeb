import { connectToDatabase } from "@/lib/mongodb";
import BlogsAndCaseStudy from "./Components/BlogAndCaseStudy";
import blog from "@/modals/blog";
import casestudy from "@/modals/casestudy";


export default async function Page() {
  try {
    await connectToDatabase();


    let [blogs, caseStudy] = await Promise.all([
      blog.find().sort({ createdAt: -1 }).lean(),
      casestudy.find().sort({ createdAt: -1 }).lean(),
    ]);

   
    blogs = blogs.map(b => ({
      ...b,
      _id: b._id.toString(),
      blocks: b.blocks?.map(block => ({ ...block })), 
      comments: b.comments?.map(c => ({ ...c, _id: c._id.toString(
        
      ) })),
    }));

    caseStudy = caseStudy.map(c => ({
      ...c,
      _id: c._id.toString(),
    }));

    return (
      <div className="pb-30 sm:px-10 px-5">
        <BlogsAndCaseStudy blogs={blogs} caseStudy={caseStudy} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

    return (
      <div className="pt-20">
        <p className="text-red-500">Failed to load data. Please try again later.</p>
      </div>
    );
  }
}
