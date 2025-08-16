import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function BlogSecondContainer({ blog, casestudy, deleteButton }) {
  const contents = blog ? blog : casestudy;
  const pathName = blog ? "blog" : "case-studies";
  const apiPath = blog ? "blogs" : "casestudy";

  return (
    <div className="w-full max-w-96 p-6">
      <div className="flex text-black justify-between gap-5">
        <Image
          src={contents.image || "/placeholderperson.png"}
          alt={contents.title}
          width={110}
          height={110}
          className="object-cover"
        />
        <div>
          <h3 className="font-bold">{contents.title}</h3>
          <p>{contents.adminName}</p>
          <div className="flex items-center justify-between mt-1 gap-2">
            <p className="text-gray-800 text-sm ">
              {formatDistanceToNow(new Date(contents.createdAt), {
                addSuffix: true,
              })}
            </p>
            <Link
              href={`/blog/${contents.slug}`}
              className="text-cyan-400 text-sm font-semibold hover:underline "
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
