"use client";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

export default function BlogCard({ blog,casestudy, deleteButton }) {

 const contents=blog ? blog : casestudy
 const pathName=blog ? "blog" :"case-studies"
 const apiPath=blog ? "blogs" :"casestudy"

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    const res = await fetch(`/api/${apiPath}?id=${contents._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("✅ Blog deleted!");
      location.reload();
    } else {
      alert("❌ Failed to delete blog.");
    }
  };
  return (
    <div className=" text-black rounded-2xl p-6 max-w-[350px]   flex justify-between items-start ">
      <div className="flex flex-col justify-between w-full">
    
          <div className=" relative w-full h-[180px] ">
            <Image
              src={contents.image || "/placeholderimage.png"}
              alt="contents Thumbnail"
              fill
              className=" object-cover"
            />
          </div>

        <h2 className="text-lg font-semibold leading-snug mt-2.5">
          {contents.title}
        </h2>

        

     <p className="text-sm text-gray-800 mt-2.5">
  {getPreviewText(contents.blocks)}
</p>
    <div className="flex items-center gap-2 mb-2 mt-3 w-full justify-between ">
          <div className="flex gap-2 items-center">
            {/* <Image
              src="/healthicons_ui-user-profile.png"
              alt="Sreya"
              width={32}
              height={32}
              className="rounded-full aspect-square object-cover"
            /> */}
            <span className="text-sm font-medium">{contents.adminName}</span>
          </div>
          <p className="text-gray-800 text-sm ">
          {formatDistanceToNow(new Date(contents.createdAt), { addSuffix: true })}
        </p>
        </div>
<div className="flex w-full justify-between">

        <Link
          href={`/${pathName}/${contents.slug}`}
          className="text-cyan-400 text-sm font-semibold hover:underline mt-2.5"
        >
          READ MORE
        </Link>
        {deleteButton && (
          <div className="flex justify-end mt-2">
            <button
              onClick={handleDelete}
              className="text-white hover:underline"
            >
              <MdDelete size={24} />
            </button>
          </div>
        )}
</div>
      </div>
    </div>
  );
}

function getPreviewText(blocks) {
  if (!blocks || !Array.isArray(blocks)) return "";

  // Find the first text block with content
  const firstTextBlock = blocks.find(block => block.type === "text" && block.content);

  if (!firstTextBlock) return ""; // fallback if no text block

  // Strip HTML tags for a clean preview
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = firstTextBlock.content;
  const text = tempDiv.textContent || tempDiv.innerText || "";

  // Limit to 20 words for preview
  return text.split(" ").slice(0, 20).join(" ") + "...";
}