import BlogCard from "../case-studies/_Components/BlogContainer";
import AdminBlogForm from "./Components/AdminAcess";

export default async function page(){

      const res = await fetch("https://carlo-peass-71nb.vercel.app/api/blogs", {
    cache: "no-store", 
  });

  const blogs = await res.json();
    return(
        <div className="pt-10">
            <AdminBlogForm blogs={blogs} />

         

        </div>
    )
}