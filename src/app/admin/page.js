
import AdminBlogForm from "./Components/AdminAcess";
import BlogEditorForm from "./Components/BlogEditorForm";
import CaseStudyForm from "./Components/CaseStudyForm";

export default async function page(){

      const res = await fetch("https://carlo-peass-71nb.vercel.app/api/blogs", {
    cache: "no-store", 
  });

  const blogs = await res.json();
      const resCase = await fetch("https://carlo-peass-71nb.vercel.app/api/casestudy", {
    cache: "no-store", 
  });

  const caseStudy = await resCase.json();
    return(
        <div className="pt-20">
            {/* <AdminBlogForm blogs={blogs} casestudy={caseStudy} /> */}
            {/* <CaseStudyForm /> */}

         <BlogEditorForm />

        </div>
    )
}