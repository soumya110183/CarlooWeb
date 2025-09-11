import casestudy from "@/modals/casestudy";
import Underline from "../_subcomponents/UnderLine";
import BlogSecondContainer from "../blog/BlogSecondContainer";
import BlogCard from "./_Components/BlogContainer";
import { connectToDatabase } from "@/lib/mongodb";

export const revalidate=0;

export const metadata = {
  title: "Case Studies: Real-World AI Compliance and Ethical Successes",
  description: "Explore Carlo PEaaS Case Studies to see how organizations implement AI compliance, ethical governance, and responsible innovation across industries. Learn from real-world examples in healthcare, finance, blockchain, and Web3 projects.",
  keywords: "Carlo PEaaS case studies, AI compliance, ethical AI, real-world AI examples, responsible innovation, healthcare AI, finance AI, blockchain, Web3 projects, AI governance success stories",
};


export default async function page() {
 await connectToDatabase();
 
   
   const casestudydetails = await casestudy.find().sort({ createdAt: -1 }).lean();
  

  return (
    <div>
      <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] overflow-y-hidden px-10 pb-30">
        <h2 className="text-[48px] font-bold text-center">Case Studies</h2>

        <Underline />
      
         <div className="bg-white flex max-sm:flex-col w-full mx-auto mt-10 gap-6">
          
          {casestudydetails.length > 0 && <BlogCard casestudy={casestudydetails[0]} />}

          
          <div className="grid lg:grid-cols-2   grid-cols-1 gap-2">
            {casestudydetails.slice(1).map((casestudy) => (
              <BlogSecondContainer key={casestudy._id} casestudy={casestudy} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
