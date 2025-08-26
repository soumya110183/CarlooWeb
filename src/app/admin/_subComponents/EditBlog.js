"use client";

import { useState } from "react";
import Image from "next/image";

export default function EditBlog({ blogId, blogTitle, adminNames, images, blocks,currently }) {
  const [title, setTitle] = useState(blogTitle || "");
  const [adminName, setAdminName] = useState(adminNames || "");
  const [image, setImage] = useState(images || "");
  const [imagePublicId, setImagePublicId] = useState("");
  const [contentBlocks, setContentBlocks] = useState(blocks || []);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [uploadingBlocks, setUploadingBlocks] = useState({});

  
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (!res.ok) throw new Error("Upload failed");

    return res.json();
  };

  const deleteFromCloudinary = async (publicId) => {
    const res = await fetch("/api/delete-image", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ public_id: publicId }),
    });
    if (!res.ok) throw new Error("Delete failed");

    return res.json();
  };

  // --- Handlers ---
  const updateBlock = (index, newContent) => {
    const updated = [...contentBlocks];
    updated[index].content = newContent;
    setContentBlocks(updated);
  };

  const addBlock = (type) => {
    const newBlock =
      type === "text" ? { type: "text", content: "" } : { type: "image", src: "", publicId: "" };
    setContentBlocks([...contentBlocks, newBlock]);
  };

  const removeBlock = (index) => {
    const block = contentBlocks[index];
    if (block.type === "image" && block.publicId) {
      handleImageDelete(index, block.publicId);
    }
    setContentBlocks(contentBlocks.filter((_, i) => i !== index));
  };

  const handleMainImageUpload = async (file) => {
    try {
      setIsImageUploading(true);

      if (imagePublicId) {
        await deleteFromCloudinary(imagePublicId);
      }

      const result = await uploadToCloudinary(file);
      setImage(result.url);
      setImagePublicId(result.public_id);
      setMessage("✅ Main image uploaded successfully!");
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Failed to upload main image");
    } finally {
      setIsImageUploading(false);
    }
  };

  const handleMainImageDelete = async () => {
    try {
      if (imagePublicId) await deleteFromCloudinary(imagePublicId);
      setImage("");
      setImagePublicId("");
      setMessage("✅ Main image deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      setMessage("❌ Failed to delete main image");
    }
  };

  const handleBlockImageUpload = async (index, file) => {
    try {
      setUploadingBlocks((prev) => ({ ...prev, [index]: true }));

      if (contentBlocks[index].publicId) {
        await deleteFromCloudinary(contentBlocks[index].publicId);
      }

      const result = await uploadToCloudinary(file);
      const updated = [...contentBlocks];
      updated[index].src = result.url;
      updated[index].publicId = result.public_id;
      setContentBlocks(updated);

      setMessage("✅ Block image uploaded successfully!");
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Failed to upload block image");
    } finally {
      setUploadingBlocks((prev) => ({ ...prev, [index]: false }));
    }
  };

  const handleImageDelete = async (index, publicId) => {
    try {
      if (publicId) await deleteFromCloudinary(publicId);
      const updated = [...contentBlocks];
      updated[index].src = "";
      updated[index].publicId = "";
      setContentBlocks(updated);
      setMessage("✅ Block image deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      setMessage("❌ Failed to delete block image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updates = { title, adminName, image, blocks: contentBlocks };

    try {
      const res = await fetch(`/api/${currently==="blogs" ?"blogs":"casestudy"}?id=${blogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      if (!res.ok) throw new Error("Update failed");

      alert(`✅ ${currently==="blogs" ?"Blog":"Casestudy"} updated successfully`);
    } catch (err) {
      console.error("Update error:", err);
      alert("❌ Failed to update blog");
    } finally {
      setLoading(false);
    }
  };

  // --- Render ---
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-[#0F092A] rounded-xl shadow-2xl text-white mt-30 z-1">
      <h2 className="text-2xl font-bold">Edit Blog</h2>

      {message && (
        <p className={message.includes("❌") ? "text-red-500" : "text-green-500"}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Main Image */}
        <div>
          <label className="block mb-1 text-gray-300">Main Image</label>
          {image ? (
            <div className="relative inline-block">
              <Image src={image} alt="Main" width={500} height={300} className="rounded-lg mb-2" />
              <button
                type="button"
                onClick={handleMainImageDelete}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          ) : isImageUploading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#00E5FF]"></div>
              <span className="text-gray-300">Uploading...</span>
            </div>
          ) : (
            <label className="cursor-pointer text-[#00E5FF] hover:underline">
              Upload Main Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files && handleMainImageUpload(e.target.files[0])}
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

        {/* Blocks */}
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
                      <Image src={block.src} alt="Block" width={400} height={200} className="rounded-lg" />
                      <button
                        type="button"
                        onClick={() => handleImageDelete(index, block.publicId)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ) : uploadingBlocks[index] ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#00E5FF]"></div>
                      <span className="text-gray-300">Uploading...</span>
                    </div>
                  ) : (
                    <label className="cursor-pointer text-[#00E5FF] hover:underline">
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          e.target.files && handleBlockImageUpload(index, e.target.files[0])
                        }
                      />
                    </label>
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
