"use client"

import { useState } from "react";

export default function CaseStudyForm(){

     const [title, setTitle] = useState('');
      const [content, setContent] = useState('');
      const [image, setImage] = useState(null);
      const [message, setMessage] = useState('');
      const [adminName, setAdminName] = useState('');
     
     
   
      const [isSubmitting, setIsSubmitting] = useState(false);



      const uploadImageToCloudinary = async () => {
    const formData = new FormData();
    formData.append('image', image);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    return data.url; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage("❌ Please upload an image.");
      return;
    }

    try {
        setIsSubmitting(true);
      const imageUrl = await uploadImageToCloudinary();

      const res = await fetch('/api/casestudy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminName,title, content, image: imageUrl }),
      });

      if (res.ok) {
        setMessage('✅ Blog added successfully!');
        setTitle('');
        setContent('');
        setImage(null);
        setAdminName("")
      } else {
        setMessage('❌ Failed to add blog.');
      }
    } catch (err) {
      setMessage('❌ Error uploading image or posting blog.');
      console.error(err);
    }
    finally {
    setIsSubmitting(false); 
    location.reload();
  }
  };
    return(
          <div className="max-w-xl mx-auto mt-20 p-6  bg-[#0F092A] rounded-xl shadow-2xl text-white">
      <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit}  className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Admin Name"
          className=" p-2 rounded  border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 placeholder-gray-500 transition-colors duration-200"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Blog title"
          className=" p-2 rounded  border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 placeholder-gray-500 transition-colors duration-200"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog content"
          className="border border-gray-600 p-2 rounded h-40 focus:outline-none text-white focus:border-[#651FFF]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <input
          type="file"
          accept="image/*"
          className="border border-gray-600 p-2 rounded bg-white text-black "
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
     <button
  type="submit"
  className="bg-[#651FFF] text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60"
  disabled={isSubmitting}
>
  {isSubmitting ? "Posting..." : "Post Blog"}
</button>
      </form>

    </div>
    )
}