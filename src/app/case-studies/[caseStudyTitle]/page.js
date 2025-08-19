import Underline from "@/app/_subcomponents/UnderLine";
import { connectToDatabase } from "@/lib/mongodb";
import casestudy from "@/modals/casestudy";
import { formatDistanceToNow } from "date-fns";

import Image from "next/image";

export default async function page({ params }) {
const caseStudyTitle =params.caseStudyTitle;



  await connectToDatabase();
  
  const casestudyDetails = await casestudy.findOne({ slug: caseStudyTitle }).lean();
 



  return (
    <section className="w-full mx-auto mt-35 text-foreground max-w-[1280px] px-4 pb-30">
      <h2 className="text-[48px] font-bold text-center">
        Case Study
      </h2>
      <Underline />
      {/* <p className="text-[22px] text-center">
        Complete the form, and our team will reach out within 24 hours.
      </p> */}
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
              <span className=" font-medium text-white">{casestudyDetails.adminName}</span>
            </div>
            <p className="text-gray-400 text-sm ">{formatDistanceToNow(new Date(casestudyDetails.createdAt), { addSuffix: true })}</p>
          </div>
          <h2 className="font-bold text-[32px] mt-9 text-white">
            {casestudyDetails.title}
          </h2>
          <div className=" relative w-full h-[262px] mt-7">
            <Image
              src={casestudyDetails.image || "/placeholderimage.png"}
              alt="Blog Thumbnail"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <p
  className="font-normal text-[14px] mt-5 text-[#C0C0C0]"
  style={{ whiteSpace: 'pre-line' }}
>
  {casestudyDetails.content}
</p>
        </div>
      </div>
    </section>
  );
}
