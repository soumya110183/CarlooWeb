import Image from "next/image";
import Card from "../_subcomponents/Card";
import ParagraphReUse from "../_subcomponents/ParagraphReUse";
import blog from "@/modals/blog";
import { connectToDatabase } from "@/lib/mongodb";

export default async function Research() {
  // Fetch blogs directly on the server
  await connectToDatabase();
  
  const blogs = await blog.find({})
    .sort({ createdAt: -1 }) // latest first
    .lean(); // convert to plain JS object
  
  // Deep serialize for client component - convert ALL ObjectIds to strings
  const serializedBlogs = blogs.map(blog => {
    const serialized = {
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt?.toISOString(),
      updatedAt: blog.updatedAt?.toISOString(),
    };

    // Serialize nested blocks array if it exists
    if (blog.blocks && Array.isArray(blog.blocks)) {
      serialized.blocks = blog.blocks.map(block => ({
        ...block,
        _id: block._id?.toString(), // convert block _id to string
      }));
    }

    return serialized;
  });

  return (
    <section className="relative w-full">
      <Image
        width={500}
        height={500}
        src="/card.png"
        alt="card"
        className=" absolute top-[60] left-[-100] z-[-1] md:block hidden "
      />
      <div
        className={`mt-[124px] w-full max-w-[1200px] mx-auto flex max-lg:flex-col max-lg:gap-5 lg:items-center justify-between text-foreground max-lg:px-10 max-sm:px-5`}
      >
        <div>
          <h3 className="sm:text-[46px] text-[32px] font-bold">
            Our Research
            <br />
            And Projects
          </h3>
          <div className="flex gap-2">
            <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

            <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          </div>
        </div>
        <div className="w-full max-w-[800px]">
          <ParagraphReUse
            paragraph={
              "Artificial Intelligence (AI) is the overarching concept of machines capable of performing tasks that typically require human intelligence — such as visual perception, speech recognition, decision-making, and language translation."
            }
          />
        </div>
      </div>
      <div className="w-full max-lg:pl-5 max-w-[1400px] mx-auto">
        <Card blogs={serializedBlogs} />
      </div>
    </section>
  );
}