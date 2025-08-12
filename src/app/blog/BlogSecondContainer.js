import Image from "next/image";

export default function BlogSecondContainer({ blog }) {
  return (
    <div className="w-full max-w-96 p-6">
      <div className="flex text-black justify-between gap-5">
        <Image
          src={blog.image || "/placeholderperson.png"}
          alt={blog.title}
          width={110}
          height={110}
          className="object-cover"
        />
        <div>
          <h3 className="font-bold">{blog.title}</h3>
          <p>{blog.adminName}</p>
        </div>
      </div>
    </div>
  );
}
