"use client";

import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import Image from "next/image";
import { useState } from "react";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [adminName, setAdminName] = useState("");
  const [blocks, setBlocks] = useState([{ type: "text", content: "" }]);

  const updateBlock = (index, newContent) => {
    const updated = [...blocks];
    updated[index].content = newContent;
    setBlocks(updated);
  };

  const addBlock = (type, index) => {
    const newBlock =
      type === "text" ? { type: "text", content: "" } : { type: "image", src: "" };
    const updated = [...blocks];
    updated.splice(index + 1, 0, newBlock);
    setBlocks(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const updated = [...blocks];
      updated[index].src = e.target.result;
      setBlocks(updated);
    };
    reader.readAsDataURL(file);
  };

  const handleMainImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setMainImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const removeBlock = (index) => {
    const updated = [...blocks];
    updated.splice(index, 1);
    setBlocks(updated);
  };

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
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-[#0F092A] rounded-xl shadow-2xl text-white">
      <h1 className="text-2xl font-bold">Blog Editor</h1>

      {/* Blog meta inputs */}
      <input
        className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div>
        <label className="block mb-1 text-gray-300">Main Image</label>
        {mainImage ? (
          <img src={mainImage} alt="Main" className="rounded-lg mb-2" />
        ) : (
          <label className="cursor-pointer text-[#00E5FF] hover:underline">
            Upload Main Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                e.target.files && handleMainImageUpload(e.target.files[0])
              }
            />
          </label>
        )}
      </div>

      <input
        className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500"
        placeholder="Admin Name"
        value={adminName}
        onChange={(e) => setAdminName(e.target.value)}
      />

      {/* Block editor */}
      {blocks.map((block, index) => (
        <div
          key={index}
          className="space-y-2 border border-gray-600 p-4 rounded bg-[#1A1336] shadow-sm"
        >
          {block.type === "text" ? (
            <textarea
              className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500 text-white"
              placeholder="Write your paragraph..."
              value={block.content}
              onChange={(e) => updateBlock(index, e.target.value)}
            />
          ) : (
            <div className="flex flex-col items-center">
              {block.src ? (
                <img src={block.src} alt="Uploaded" className="w-[500px] rounded" />
              ) : (
                <label className="cursor-pointer text-[#00E5FF] hover:underline">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      e.target.files && handleImageUpload(index, e.target.files[0])
                    }
                  />
                </label>
              )}
            </div>
          )}

          <div className="flex gap-2 pt-2 border-t border-gray-600">
            <button
              onClick={() => addBlock("text", index)}
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              + Text
            </button>
            <button
              onClick={() => addBlock("image", index)}
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              + Image
            </button>
            <button
              onClick={() => removeBlock(index)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
         
         
      ))}
  <button
            type="submit"
            className="bg-[#651FFF] text-white px-4 py-2 w-full rounded hover:bg-blue-700 disabled:opacity-60"
            
          >
            Post
          </button>
      {/* Preview */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-black">
        {mainImage && (
          <img src={mainImage} alt="Main" className="w-full h-64 object-cover rounded-lg mb-4" />
        )}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2">{title || "Blog Title"}</h1>
          <div className="flex items-center shrink-0 gap-3">
            <div className="flex items-center justify-center rounded-full bg-gray-300">
              <Image
                src="/healthicons_ui-user-profile.png"
                alt="Sreya"
                width={32}
                height={32}
                className="rounded-full aspect-square object-cover"
              />
            </div>
            <div className="text-gray-700">{adminName || "Admin Name"}</div>
          </div>
        </div>
        <div className="prose max-w-none">
          {groupBlocksForPreview().map((block, index) => {
            if (block.type === "text") {
              return <p key={index} className="mt-3"   style={{ whiteSpace: 'pre-line' }}>{block.content}</p>;
            }
            if (block.type === "images") {
              return (
                <div key={index} className="flex gap-3 flex-wrap mt-3">
                  {block.images.map((src, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={src}
                      className="w-40 h-40 object-cover rounded-lg"
                      alt=""
                    />
                  ))}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
