


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
      <div className="pt-30">
        <div className="flex justify-center items-center gap-5 mx-auto pb-20">

          <button
       
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Blogs
      </button>

      <button
       
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Case Study
      </button>
        </div>
        {/* <AdminBlogForm blogs={blogs} casestudy={caseStudy} /> */}
        {/* <CaseStudyForm /> */}
        <BlogEditorForm blogs={blogs} />
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
