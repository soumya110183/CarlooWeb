"use client";

import { useState } from "react";
import Image from "next/image";

export default function EditBlog({ blogId, blogTitle, adminNames, images, blocks }) {
  const [title, setTitle] = useState(blogTitle || "");
  const [adminName, setAdminName] = useState(adminNames || "");
  const [image, setImage] = useState(images || "");
  const [contentBlocks, setContentBlocks] = useState(blocks || []);
  const [loading, setLoading] = useState(false);

  
  const updateBlock = (index, newContent) => {
    const updated = [...contentBlocks];
    updated[index].content = newContent;
    setContentBlocks(updated);
  };

  
  const updateImageBlock = (index, newSrc) => {
    const updated = [...contentBlocks];
    updated[index].src = newSrc;
    setContentBlocks(updated);
  };

 
  const addBlock = (type) => {
    const newBlock =
      type === "text" ? { type: "text", content: "" } : { type: "image", src: "" };
    setContentBlocks([...contentBlocks, newBlock]);
  };

 
  const removeBlock = (index) => {
    setContentBlocks(contentBlocks.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updates = {
      title,
      adminName,
      image,
      blocks: contentBlocks,
    };

    try {
      const res = await fetch(`/api/blogs?id=${blogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      if (res.ok) {
        alert("✅ Blog updated successfully!");
      } else {
        alert("❌ Failed to update blog.");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-[#0F092A] rounded-xl shadow-2xl text-white mt-30 z-1">
      <h2 className="text-2xl font-bold">Edit Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        <input
          className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      
        <div>
          <label className="block mb-1 text-gray-300">Main Image</label>
          {image ? (
            <div className="relative inline-block">
              <Image
                src={image}
                alt="Main"
                width={500}
                height={300}
                className="rounded-lg mb-2"
              />
              <button
                type="button"
                onClick={() => setImage("")}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          ) : (
            <input
              type="text"
              placeholder="Enter main image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500"
            />
          )}
        </div>

     
        <input
          className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500"
          placeholder="Admin Name"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />

        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Content</h3>
          {contentBlocks.map((block, index) => (
            <div key={index} className="border border-gray-600 p-4 rounded-lg space-y-2">
              {block.type === "text" ? (
                <textarea
                  value={block.content}
                  onChange={(e) => updateBlock(index, e.target.value)}
                  placeholder="Enter text content"
                  className="w-full p-2 bg-transparent border-b border-gray-500 focus:border-[#651FFF] focus:outline-none"
                />
              ) : (
                <div>
                  {block.src ? (
                    <div className="relative">
                      <Image
                        src={block.src}
                        alt="Block"
                        width={400}
                        height={200}
                        className="rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => updateImageBlock(index, "")}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <input
                      type="text"
                      placeholder="Enter image URL"
                      value={block.src}
                      onChange={(e) => updateImageBlock(index, e.target.value)}
                      className="w-full p-2 bg-transparent border-b border-gray-500 focus:border-[#651FFF] focus:outline-none"
                    />
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={() => removeBlock(index)}
                className="text-red-400 text-sm hover:underline"
              >
                Remove 
              </button>
            </div>
          ))}

          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => addBlock("text")}
              className="bg-[#651FFF] px-4 py-2 rounded hover:bg-blue-700"
            >
              ➕ Add Text 
            </button>
            <button
              type="button"
              onClick={() => addBlock("image")}
              className="bg-[#00E5FF] px-4 py-2 rounded hover:bg-cyan-600"
            >
              🖼️ Add Image
            </button>
          </div>
        </div>

      
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#5d3fd3] text-white font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
