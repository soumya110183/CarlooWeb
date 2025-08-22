import Image from "next/image";
import CommentContainer from "./CommentContainer";

export default function BlogContent({ mainImage, title, adminName, blocks,adminPhoto,blogId,comments }) {

  const groupBlocksForPreview = () => {
    const grouped = [];
    let tempImages = [];

    blocks.forEach((block) => {
      if (block.type === "image" && block.src) {
        tempImages.push(block.src);
      } else {
        if (tempImages.length > 0) {
          grouped.push({ type: "images", images: tempImages });
          tempImages = [];
        }
        grouped.push(block);
      }
    });

    if (tempImages.length > 0) {
      grouped.push({ type: "images", images: tempImages });
    }

    return grouped;
  };

  return (
    <>
    
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      {mainImage && (
        <Image
          src={mainImage}
          alt="Main"
          width={800}
          height={400}
          className="w-full h-90 object-cover rounded-lg mb-4"
        />
      )}

      <div className="flex items-center justify-between gap-5">
        <h1 className="text-3xl font-bold mb-2">{title || "Blog Title"}</h1>
        <div className="flex items-center shrink-0 gap-3">
          <div className="flex items-center justify-center rounded-full bg-gray-300">
            <Image
              src={adminPhoto ? adminPhoto: "/healthicons_ui-user-profile.png" }
              alt="Author"
              width={32}
              height={32}
              className="rounded-full aspect-square object-cover"
            />
          </div>
          <div className="text-gray-700 font-semibold">{adminName || "Admin Name"}</div>
        </div>
      </div>

      <div className="prose max-w-none">
        {groupBlocksForPreview().map((block, index) => {
          if (block.type === "text") {
            return (
              <div
                key={index}
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          }

          if (block.type === "images") {
            return (
              <div key={index} className="flex gap-3 flex-wrap mt-3">
                {block.images.map((src, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={src}
                    alt=""
                    width={160}
                    height={160}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg text-black mt-10 ">
    <CommentContainer blogId={blogId} comments={comments} />
    </div>
    </>
  );
}
