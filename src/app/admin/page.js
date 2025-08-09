
import AdminBlogForm from "./Components/AdminAcess";
import CaseStudyForm from "./Components/CaseStudyForm";

export default async function page(){

      const res = await fetch("https://carlo-peass-71nb.vercel.app/api/blogs", {
    cache: "no-store", 
  });

  const blogs = await res.json();
    return(
        <div className="pt-10">
            <AdminBlogForm blogs={blogs} />
            <CaseStudyForm />

         

        </div>
    )
}