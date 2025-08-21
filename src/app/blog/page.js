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
    <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] lg:px-10 px-5 lg:pb-32 pb-15">
      <h2 className="text-[48px] font-bold text-center">Blogs</h2>
      <Underline />

      <div className="bg-white flex w-full mt-10 gap-6">
        {/* First blog (big card) */}
        {blogs.length > 0 && <BlogCard blog={blogs[0]}/>}

        {/* Remaining blogs (small stacked cards) */}
        <div className="grid grid-cols-2 gap-2">
          {blogs.slice(1).map((blog) => (
            <BlogSecondContainer key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
