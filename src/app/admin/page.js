


import BlogsAndCaseStudy from "./Components/BlogAndCaseStudy";
import BlogEditorForm from "./Components/BlogEditorForm";


export default async function page() {

  
  try {
    const [blogsRes, caseRes] = await Promise.all([
      fetch("https://carlo-peass-71nb.vercel.app/api/blogs", { cache: "no-store" }),
      fetch("https://carlo-peass-71nb.vercel.app/api/casestudy", { cache: "no-store" }),
    ]);

   
    if (!blogsRes.ok || !caseRes.ok) {
      throw new Error("Failed to fetch one or more resources");
    }

    const [blogs, caseStudy] = await Promise.all([
      blogsRes.json(),
      caseRes.json(),
    ]);

    return (
      <div className="pb-30">

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
