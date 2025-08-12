"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import ImageExtension from "@tiptap/extension-image";

// ✅ TextBlock component with Tiptap editor
function TextBlock({ content, index, onUpdate, onAddBlock, onRemoveBlock }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      BulletList,
      OrderedList,
      ListItem,
      ImageExtension,
    ],
    content: content || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onUpdate(index, editor.getHTML());
    },
  });

  return (
    <div className="space-y-2 border border-gray-600 p-4 rounded bg-[#1A1336] shadow-sm">
      {/* Toolbar */}
      <div className="flex gap-2 mb-2 flex-wrap">
        <button onClick={() => editor?.chain().focus().toggleBold().run()} className="px-2 py-1 bg-gray-700 rounded">B</button>
        <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="px-2 py-1 bg-gray-700 rounded italic">I</button>
        <button onClick={() => editor?.chain().focus().toggleUnderline().run()} className="px-2 py-1 bg-gray-700 rounded underline">U</button>
        <button onClick={() => editor?.chain().focus().toggleBulletList().run()} className="px-2 py-1 bg-gray-700 rounded">• List</button>
        <button onClick={() => editor?.chain().focus().toggleOrderedList().run()} className="px-2 py-1 bg-gray-700 rounded">1. List</button>
      </div>

      <EditorContent
        editor={editor}
        className="bg-white text-black p-2 rounded min-h-[150px] border border-transparent focus:outline-none focus:border-purple-600 focus:ring-0"
      />

      {/* Block controls */}
      <div className="flex gap-2 pt-2 border-t border-gray-600">
        <button onClick={() => onAddBlock("text", index)} className="px-3 py-1 bg-green-500 text-white rounded">+ Text</button>
        <button onClick={() => onAddBlock("image", index)} className="px-3 py-1 bg-blue-500 text-white rounded">+ Image</button>
        <button onClick={() => onRemoveBlock(index)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  );
}

// ✅ Image block
function ImageBlock({ src, index, onImageUpload, onAddBlock, onRemoveBlock }) {
  return (
    <div className="space-y-2 border border-gray-600 p-4 rounded bg-[#1A1336] shadow-sm">
      <div className="flex flex-col items-center">
        {src ? (
          <Image src={src} alt="Uploaded" width={500} height={300} className="rounded" />
        ) : (
          <label className="cursor-pointer text-[#00E5FF] hover:underline">
            Upload Image
            <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files && onImageUpload(index, e.target.files[0])} />
          </label>
        )}
      </div>
      <div className="flex gap-2 pt-2 border-t border-gray-600">
        <button onClick={() => onAddBlock("text", index)} className="px-3 py-1 bg-green-500 text-white rounded">+ Text</button>
        <button onClick={() => onAddBlock("image", index)} className="px-3 py-1 bg-blue-500 text-white rounded">+ Image</button>
        <button onClick={() => onRemoveBlock(index)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  );
}

export default function BlogEditorForm() {
  const [title, setTitle] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [adminName, setAdminName] = useState("");
  const [blocks, setBlocks] = useState([{ type: "text", content: "" }]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  useEffect(() => {
    if (sessionStorage.getItem("adminAccess") === "true") {
      setAccessGranted(true);
    }
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAccessGranted(true);
      sessionStorage.setItem("adminAccess", "true");
    } else {
      setError("❌ Incorrect password");
    }
  };

  const updateBlock = (index, newContent) => {
    const updated = [...blocks];
    updated[index].content = newContent;
    setBlocks(updated);
  };

  const addBlock = (type, index) => {
    const newBlock = type === "text" ? { type: "text", content: "" } : { type: "image", src: "" };
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
    setMainImage(file);
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

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !adminName || !mainImage) {
      setMessage("❌ Please fill all required fields and upload main image.");
      return;
    }

    try {
      setIsSubmitting(true);

      // Upload main image
      const mainImageUrl = await uploadImageToCloudinary(mainImage);

      // Prepare blog content
      const blogData = {
        title,
        adminName,
        mainImage: mainImageUrl,
        blocks,
      };

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (res.ok) {
        setMessage("✅ Blog added successfully!");
        setTitle("");
        setAdminName("");
        setMainImage(null);
        setBlocks([{ type: "text", content: "" }]);
      } else {
        setMessage("❌ Failed to add blog.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error uploading image or posting blog.");
    } finally {
      setIsSubmitting(false);
      location.reload();
    }
  };

  if (!accessGranted) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-[#0F092A] p-6 rounded-xl text-white">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handlePasswordSubmit} className="space-y-3">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded border-b border-gray-600 focus:outline-none focus:border-[#651FFF]"
          />
          <button type="submit" className="bg-[#651FFF] w-full py-2 rounded text-white">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-[#0F092A] rounded-xl shadow-2xl text-white">
      <h1 className="text-2xl font-bold">Blog Editor</h1>
      {message && <p className="text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF]"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label className="block mb-1 text-gray-300">Main Image</label>
          {mainImage ? (
            <Image src={URL.createObjectURL(mainImage)} alt="Main" width={500} height={300} className="rounded-lg mb-2" />
          ) : (
            <label className="cursor-pointer text-[#00E5FF] hover:underline">
              Upload Main Image
              <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files && handleMainImageUpload(e.target.files[0])} />
            </label>
          )}
        </div>

        <input
          className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF]"
          placeholder="Admin Name"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />

        {blocks.map((block, index) =>
          block.type === "text" ? (
            <TextBlock key={`text-${index}`} content={block.content} index={index} onUpdate={updateBlock} onAddBlock={addBlock} onRemoveBlock={removeBlock} />
          ) : (
            <ImageBlock key={`image-${index}`} src={block.src} index={index} onImageUpload={handleImageUpload} onAddBlock={addBlock} onRemoveBlock={removeBlock} />
          )
        )}

        <button type="submit" className="bg-[#651FFF] text-white px-4 py-2 w-full rounded hover:bg-blue-700 disabled:opacity-60" disabled={isSubmitting}>
          {isSubmitting ? "Posting..." : "Post"}
        </button>
      </form>

      {/* Preview */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-black">
        {mainImage && (
          <Image src={URL.createObjectURL(mainImage)} alt="Main" width={800} height={400} className="w-full h-64 object-cover rounded-lg mb-4" />
        )}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2">{title || "Blog Title"}</h1>
          <div className="flex items-center shrink-0 gap-3">
            <div className="flex items-center justify-center rounded-full bg-gray-300">
              <Image src="/healthicons_ui-user-profile.png" alt="Author" width={32} height={32} className="rounded-full" />
            </div>
            <div className="text-gray-700">{adminName || "Admin Name"}</div>
          </div>
        </div>
        <div className="prose max-w-none">
          {groupBlocksForPreview().map((block, index) =>
            block.type === "text" ? (
              <div key={index} className="mt-3" dangerouslySetInnerHTML={{ __html: block.content }} />
            ) : block.type === "images" ? (
              <div key={index} className="flex gap-3 flex-wrap mt-3">
                {block.images.map((src, imgIndex) => (
                  <Image key={imgIndex} src={src} alt="" width={160} height={160} className="w-40 h-40 object-cover rounded-lg" />
                ))}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
