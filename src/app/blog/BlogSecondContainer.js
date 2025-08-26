"use client"

import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { getPreviewText } from "../case-studies/_Components/BlogContainer";

export default function BlogSecondContainer({
  blog,
  casestudy,
  deleteButton,
  editButton,
}) {
  const contents = blog ? blog : casestudy;
  const pathName = blog ? "blog" : "case-studies";
  const apiPath = blog ? "blogs" : "casestudy";

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
  <div className="w-full max-w-[400px] p-6">
  <div className="flex flex-col sm:flex-row text-black gap-4 min-h-[160px]">
    {/* Image */}
    <div className="flex-shrink-0 h-[150px] sm:h-auto w-full sm:w-[150px] relative  overflow-hidden">
      <Image
        src={contents.image || "/placeholderperson.png"}
        alt={contents.title}
        fill
        className="object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between flex-1 h-full">
      <div>
        <h3 className="font-bold line-clamp-2">{contents.title}</h3>
        <p className="text-sm text-gray-600 truncate">{contents.adminName}</p>
        <p className="text-sm text-gray-800 mt-2.5">{getPreviewText(contents.blocks, 10)}</p>
      </div>

      <div className="flex items-center justify-between mt-2 gap-2">
        <p className="text-gray-800 text-sm">
          {formatDistanceToNow(new Date(contents.createdAt), { addSuffix: true })}
        </p>

        <div className="flex gap-2 items-center">
          {deleteButton && <button onClick={handleDelete}><MdDelete size={24} color="black"/></button>}
          {editButton && (
            <Link href={{ pathname: `/admin/${contents.slug}`, query: { content: apiPath } }}>
              <button><FaRegEdit size={24} color="black"/></button>
            </Link>
          )}
        </div>
      </div>

      <Link
        href={{ pathname: `/${pathName}/${contents.slug}`, query: { content: apiPath } }}
        className="text-cyan-400 text-sm font-semibold hover:underline mt-2"
      >
        READ MORE
      </Link>
    </div>
  </div>
</div>

  );
}
