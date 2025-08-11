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
    <div className="bg-[#0F092A] text-white rounded-2xl p-6 max-w-[350px] mx-auto  flex justify-between items-start shadow-lg">
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
            <span className="text-sm font-medium">{contents.adminName}</span>
          </div>
          <p className="text-gray-400 text-sm ">
          {formatDistanceToNow(new Date(contents.createdAt), { addSuffix: true })}
        </p>
        </div>
          <div className=" relative w-full h-[180px] mt-4">
            <Image
              src={contents.image || "/placeholderimage.png"}
              alt="contents Thumbnail"
              fill
              className="rounded-lg object-cover"
            />
          </div>

        <h2 className="text-lg font-semibold leading-snug mt-2.5">
          {contents.title}
        </h2>

        

        <p className="text-sm text-gray-300 mt-2.5">
          {contents.content.split(" ").slice(0, 20).join(" ")}...
        </p>
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
