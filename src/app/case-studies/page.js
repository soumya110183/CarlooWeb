import Underline from "../_subcomponents/UnderLine";
import BlogSecondContainer from "../blog/BlogSecondContainer";
import BlogCard from "./_Components/BlogContainer";



export default async function page() {
  const res = await fetch("https://carlo-peass-71nb.vercel.app/api/casestudy", {
    cache: "no-store",
  });

  const casestudy = await res.json();

  return (
    <div>
      <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] overflow-y-hidden px-10 pb-30">
        <h2 className="text-[48px] font-bold text-center">Case Studies</h2>

        <Underline />
      
         <div className="bg-white flex max-sm:flex-col w-full mx-auto mt-10 gap-6">
          
          {casestudy.length > 0 && <BlogCard casestudy={casestudy[0]} />}

          
          <div className="grid lg:grid-cols-2   grid-cols-1 gap-2">
            {casestudy.slice(1).map((casestudy) => (
              <BlogSecondContainer key={casestudy._id} casestudy={casestudy} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
