import Underline from "../_subcomponents/UnderLine";
import BlogCard from "../case-studies/_Components/BlogContainer";
import BlogSecondContainer from "./BlogSecondContainer";

export default async function Page() {
  const res = await fetch("https://carlo-peass-71nb.vercel.app/api/blogs", {
    cache: "no-store",
  });

  const blogs = await res.json();
  
  console.log(blogs)
  

  return (
    <div>
      <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] overflow-y-hidden  lg:px-10 px-5 lg:pb-32 pb-15">
        <h2 className="text-[48px] font-bold text-center">Blog</h2>

        <Underline />
        <p className="text-[22px] text-center w-full max-w-[800px] mx-auto ">
          Carlo PEaaS: Ethical AI and Data Protection Compliance with Global
          Standards like GDPR, CCPA, and the EU AI Act
        </p>
        {/* <div className="w-full bg-white max-w-[1200px] mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-10 shrink-0 ">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div> */}
        <div className="bg-white flex w-full mt-10">

        <BlogCard blog={blogs[0]} />
        <BlogSecondContainer />
        </div>
      </section>
    </div>
  );
}
