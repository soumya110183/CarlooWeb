import Underline from "@/app/_subcomponents/UnderLine";
import { connectToDatabase } from "@/lib/mongodb";
import blog from "@/modals/blog";
import { formatDistanceToNow } from "date-fns";

import Image from "next/image";

export default async function page({ params }) {
  const blogId = params.blogid;

  console.log("Blog ID from URL:", blogId);

  await connectToDatabase();

  const blogsDetails = await blog.findById(blogId).lean();



  return (
    <section className="w-full mx-auto mt-35 text-white  max-w-[1280px] px-4 pb-30">
      <h2 className="text-[48px] font-bold text-center">
        Get in touch with us
      </h2>
      <Underline />
      <p className="text-[22px] text-center">
        Complete the form, and our team will reach out within 24 hours.
      </p>
      <div className="w-full max-w-[950px] mx-auto bg-[#161616] p-10 rounded-2xl mt-10">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2 w-full justify-between text-[16px] ">
            <div className="flex gap-2 items-center">
              <Image
                src="/healthicons_ui-user-profile.png"
                alt="Sreya"
                width={32}
                height={32}
                className="rounded-full aspect-square object-cover"
              />
              <span className=" font-medium">{blogsDetails.adminName}</span>
            </div>
            <p className="text-gray-400 text-sm ">{formatDistanceToNow(new Date(blogsDetails.createdAt), { addSuffix: true })}</p>
          </div>
          <h2 className="font-bold text-[32px] mt-9">
            {blogsDetails.title}
          </h2>
          <div className=" relative w-full h-[262px] mt-7">
            <Image
              src={blogsDetails.image || "/placeholderimage.png"}
              alt="Blog Thumbnail"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <p className="font-normal text-[14px] mt-5 text-[#C0C0C0]">
           {blogsDetails.content}
          </p>
        </div>
      </div>
    </section>
  );
}
