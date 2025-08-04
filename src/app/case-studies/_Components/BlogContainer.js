"use client";
import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="bg-[#121212] text-white rounded-2xl p-6 max-w-[350px] flex justify-between items-start shadow-lg">
      
      <div className="flex flex-col justify-between w-full">
   <div className="flex items-center gap-2 mb-2 w-full justify-between ">
    <div className="flex gap-2 items-center">
  <Image
    src="/placeholderperson.png"
    alt="Sreya"
    width={32}
    height={32}
    className="rounded-full aspect-square object-cover"
  />
  <span className="text-sm font-medium">Sreya</span>
  </div>
     <div className="ml-4">
        <Image
          src="/unsplash_FHgWFzDDAOs.png" // Replace with actual article image path
          alt="AI Ethics"
          width={116}
          height={116}
          className="rounded-lg object-cover"
        />
      </div>
</div>

        <h2 className="text-lg font-semibold leading-snug mb-2">
          What Makes an AI Truly Ethical?...
        </h2>

        <p className="text-gray-400 text-sm mb-4">17 hours ago</p>

        <p className="text-sm text-gray-300 mb-4">
          As artificial intelligence continues to transform our societies, the question of what makes an AI truly ethical has shifted from a technical curiosity to a
        </p>

        <a href="#" className="text-cyan-400 text-sm font-semibold hover:underline">
          READ MORE
        </a>
      </div>

      {/* Thumbnail image */}
   
    </div>
  );
}
