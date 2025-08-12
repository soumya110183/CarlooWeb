"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";

// ✅ Separate component for text blocks to isolate useEditor hook
function TextBlock({ content, index, onUpdate, onAddBlock, onRemoveBlock }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline',
        },
      }),
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
        <button 
          type="button" 
          onClick={() => editor?.chain().focus().toggleBold().run()} 
          className={`px-2 py-1 rounded ${editor?.isActive('bold') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'}`}
        >
          B
        </button>
        <button 
          type="button" 
          onClick={() => editor?.chain().focus().toggleItalic().run()} 
          className={`px-2 py-1 rounded italic ${editor?.isActive('italic') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'}`}
        >
          I
        </button>
        <button 
          type="button" 
          onClick={() => editor?.chain().focus().toggleUnderline().run()} 
          className={`px-2 py-1 rounded underline ${editor?.isActive('underline') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'}`}
        >
          U
        </button>
        <button 
          type="button" 
          onClick={() => editor?.chain().focus().toggleBulletList().run()} 
          className={`px-2 py-1 rounded ${editor?.isActive('bulletList') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'}`}
        >
          • List
        </button>
        <button 
          type="button" 
          onClick={() => editor?.chain().focus().toggleOrderedList().run()} 
          className={`px-2 py-1 rounded ${editor?.isActive('orderedList') ? 'bg-purple-600 text-white' : 'bg-gray-700 text-white'}`}
        >
          1. List
        </button>
      </div>

      <EditorContent editor={editor} className="bg-white text-black p-2 rounded min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#651FFF]" />

      {/* Block controls */}
      <div className="flex gap-2 pt-2 border-t border-gray-600">
        <button type="button" onClick={() => onAddBlock("text", index)} className="px-3 py-1 bg-green-500 text-white rounded">
          + Text
        </button>
        <button type="button" onClick={() => onAddBlock("image", index)} className="px-3 py-1 bg-blue-500 text-white rounded">
          + Image
        </button>
        <button type="button" onClick={() => onRemoveBlock(index)} className="px-3 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

function ImageBlock({ src, publicId, index, onImageUpload, onImageDelete, onAddBlock, onRemoveBlock, isUploading }) {
  return (
    <div className="space-y-2 border border-gray-600 p-4 rounded bg-[#1A1336] shadow-sm">
      <div className="flex flex-col items-center">
        {src ? (
          <div className="relative">
            <Image src={src} alt="Uploaded" width={500} height={300} className="rounded" />
            <button
              type="button"
              onClick={() => onImageDelete(index, publicId)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
              title="Delete image"
            >
              ×
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {isUploading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00E5FF]"></div>
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
                    e.target.files && onImageUpload(index, e.target.files[0])
                  }
                />
              </label>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-2 border-t border-gray-600">
        <button type="button" onClick={() => onAddBlock("text", index)} className="px-3 py-1 bg-green-500 text-white rounded">
          + Text
        </button>
        <button type="button" onClick={() => onAddBlock("image", index)} className="px-3 py-1 bg-blue-500 text-white rounded">
          + Image
        </button>
        <button type="button" onClick={() => onRemoveBlock(index)} className="px-3 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default function BlogEditorForm() {
  const [title, setTitle] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [mainImagePublicId, setMainImagePublicId] = useState("");
  const [adminName, setAdminName] = useState("");
  const [blocks, setBlocks] = useState([{ type: "text", content: "" }]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingImages, setUploadingImages] = useState({});
  const [isMainImageUploading, setIsMainImageUploading] = useState(false);

  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState("");
  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("adminAccess") === "true";
    if (isLoggedIn) setAccessGranted(true);
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
    const newBlock =
      type === "text" 
        ? { type: "text", content: "" } 
        : { type: "image", src: "", publicId: "" };
    const updated = [...blocks];
    updated.splice(index + 1, 0, newBlock);
    setBlocks(updated);
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    return await response.json();
  };

  const deleteFromCloudinary = async (publicId) => {
    const response = await fetch('/api/delete-image', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_id: publicId }),
    });

    if (!response.ok) {
      throw new Error('Delete failed');
    }

    return await response.json();
  };

  const handleImageUpload = async (index, file) => {
    try {
      setUploadingImages(prev => ({ ...prev, [index]: true }));
      
      const result = await uploadToCloudinary(file);
      
      const updated = [...blocks];
      updated[index].src = result.url;
      updated[index].publicId = result.public_id;
      setBlocks(updated);
      
      setMessage("✅ Image uploaded successfully!");
    } catch (error) {
      console.error('Upload error:', error);
      setMessage("❌ Failed to upload image. Please try again.");
    } finally {
      setUploadingImages(prev => ({ ...prev, [index]: false }));
    }
  };

  const handleImageDelete = async (index, publicId) => {
    try {
      if (publicId) {
        await deleteFromCloudinary(publicId);
      }
      
      const updated = [...blocks];
      updated[index].src = "";
      updated[index].publicId = "";
      setBlocks(updated);
      
      setMessage("✅ Image deleted successfully!");
    } catch (error) {
      console.error('Delete error:', error);
      setMessage("❌ Failed to delete image.");
    }
  };

  const handleMainImageUpload = async (file) => {
    try {
      setIsMainImageUploading(true);
      
 
      if (mainImagePublicId) {
        await deleteFromCloudinary(mainImagePublicId);
      }
      
      const result = await uploadToCloudinary(file);
      setMainImage(result.url);
      setMainImagePublicId(result.public_id);
      
      setMessage("✅ Main image uploaded successfully!");
    } catch (error) {
      console.error('Upload error:', error);
      setMessage("❌ Failed to upload main image. Please try again.");
    } finally {
      setIsMainImageUploading(false);
    }
  };

  const handleMainImageDelete = async () => {
    try {
      if (mainImagePublicId) {
        await deleteFromCloudinary(mainImagePublicId);
      }
      
      setMainImage("");
      setMainImagePublicId("");
      setMessage("✅ Main image deleted successfully!");
    } catch (error) {
      console.error('Delete error:', error);
      setMessage("❌ Failed to delete main image.");
    }
  };

  const removeBlock = (index) => {
    const blockToRemove = blocks[index];
    
   
    if (blockToRemove.type === "image" && blockToRemove.publicId) {
      handleImageDelete(index, blockToRemove.publicId);
    }
    
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

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!title || !adminName || !mainImage) {
    setMessage("❌ Please fill all required fields and upload main image.");
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        adminName,
        image: mainImage,
        blocks, 
      }),
    });

    if (!res.ok) throw new Error("Failed to save blog");

    const data = await res.json();
    setMessage("✅ Blog saved successfully!");
  } catch (error) {
    setMessage("❌ Failed to save blog.");
  } finally {
    setIsSubmitting(false);
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
            className="w-full p-2 rounded border-b border-gray-600 focus:outline-none focus:border-[#651FFF] bg-transparent text-white"
          />
          <button
            type="submit"
            className="bg-[#651FFF] w-full py-2 rounded text-white"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-[#0F092A] rounded-xl shadow-2xl text-white">
      <h1 className="text-2xl font-bold">Blog Editor</h1>
      {message && <p className={message.includes('❌') ? 'text-red-500' : 'text-green-500'}>{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label className="block mb-1 text-gray-300">Main Image</label>
          {mainImage ? (
            <div className="relative inline-block">
              <Image src={mainImage} alt="Main" width={500} height={300} className="rounded-lg mb-2" />
              <button
                type="button"
                onClick={handleMainImageDelete}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                title="Delete main image"
              >
                ×
              </button>
            </div>
          ) : (
            <div>
              {isMainImageUploading ? (
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
                    onChange={(e) =>
                      e.target.files && handleMainImageUpload(e.target.files[0])
                    }
                  />
                </label>
              )}
            </div>
          )}
        </div>

        <input
          className="w-full p-2 border-b border-gray-600 bg-transparent rounded focus:outline-none focus:border-[#651FFF] placeholder-gray-500"
          placeholder="Admin Name"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />

  
        {blocks.map((block, index) => {
          if (block.type === "text") {
            return (
              <TextBlock
                key={`text-${index}`}
                content={block.content}
                index={index}
                onUpdate={updateBlock}
                onAddBlock={addBlock}
                onRemoveBlock={removeBlock}
              />
            );
          }

          return (
            <ImageBlock
              key={`image-${index}`}
              src={block.src}
              publicId={block.publicId}
              index={index}
              onImageUpload={handleImageUpload}
              onImageDelete={handleImageDelete}
              onAddBlock={addBlock}
              onRemoveBlock={removeBlock}
              isUploading={uploadingImages[index]}
            />
          );
        })}

        <button
          type="submit"
          className="bg-[#651FFF] text-white px-4 py-2 w-full rounded hover:bg-blue-700 disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Post"}
        </button>
      </form>

      {/* Preview */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-black">
        {mainImage && (
          <Image
            src={mainImage}
            alt="Main"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2">{title || "Blog Title"}</h1>
          <div className="flex items-center shrink-0 gap-3">
            <div className="flex items-center justify-center rounded-full bg-gray-300">
              <Image
                src="/healthicons_ui-user-profile.png"
                alt="Author"
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
    </div>
  );
}