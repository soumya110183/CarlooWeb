"use client";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

export default function CaseStudy() {

  return (
    <div className="bg-[#0F092A] text-white rounded-2xl p-6 max-w-[350px]  flex justify-between items-start shadow-lg">
      <div className="flex flex-col justify-between w-full">
        <div className="flex items-center gap-2 mb-2 w-full justify-between ">
          <div className="flex gap-2 items-center">
            <Image
              src="/healthicons_ui-user-profile.png"
              alt="Sreya"
              width={32}
              height={32}
              className="rounded-full aspect-square object-cover"
            />
            <span className="text-sm font-medium">chris</span>
          </div>
          <p className="text-gray-400 text-sm ">
          17 hours ago
        </p>
        </div>
          <div className=" relative w-full h-[180px] mt-4">
            <Image
              src={"/unsplash_agUC-v_D1iI.png"}
              alt="Blog Thumbnail"
              fill
              className="rounded-lg object-cover"
            />
          </div>

        <h2 className="text-lg font-semibold leading-snug mt-2.5">
          
				How Carlo PEaaS Supports GDPR, HIPAA, and ISO 27001 in AI Workflows			
        </h2>

        

        <p className="text-sm text-gray-300 mt-2.5">
          In an era where artificial intelligence (AI) is transforming industries at an unprecedented pace, regulatory compliance remains a critical concern for organizations. Whether it’s the
        </p>
<div className="flex w-full justify-between">

        <Link
          href={`#`}
          className="text-cyan-400 text-sm font-semibold hover:underline mt-2.5"
        >
        
        </Link>
  
</div>
      </div>
    </div>
  );
}
