import Image from "next/image";
import Link from "next/link";

export default function CardComp({ heading, paragraph, img, slug }) {
  return (
    <div className="relative w-[320px] h-[400px] rounded-[20px] overflow-hidden shadow-lg">
      <Image
        width={800}
        height={1200}
        src={img}
        alt={heading}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#00000080] to-transparent"></div>

      <div className="absolute bottom-0 p-6 text-white z-10">
        {/* Title as clickable link */}
        <Link href={`/blog/${slug}`} className="hover:underline cursor-pointer">
          <h3 className="text-[22px] font-bold leading-tight">{heading}</h3>
        </Link>

        <p className="mt-3 text-[16px] leading-[1.6]">{paragraph}</p>
      </div>
    </div>
  );
}
