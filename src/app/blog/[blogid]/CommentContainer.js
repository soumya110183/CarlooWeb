"use client";

import Image from "next/image";
import { useState } from "react";

export default function CommentContainer({ blogId, comments = [] }) {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(comments); // <-- initialize with prop
  const [loading, setLoading] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !comment) return;

    setLoading(true);
    try {
      const res = await fetch("/api/blogs/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blogId, name, email, text: comment }),
      });

      const data = await res.json();

      if (res.ok) {
        setCommentList(data.comments); 
        setName("");
        setEmail("");
        setComment("");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto p-6 ">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-[#651FFF] bg-[#F2F2F2]"
          value={name}
          maxLength={50}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-[#651FFF] bg-[#F2F2F2]"
          value={email}
          maxLength={100}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Add comment"
          className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-[#651FFF] bg-[#F2F2F2] min-h-[100px]"
          value={comment}
          maxLength={500}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#651FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4e12d9] transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div className="space-y-7 mt-8">
        <h3 className="font-bold text-black">
          Comments{" "}
          <span className="bg-[#651FFF] text-white px-2 py-0.5 rounded-full text-sm">
            {commentList.length}
          </span>
        </h3>

        {commentList.length === 0 && <p className="text-gray-500">No comments yet. Be the first!</p>}

        {commentList.map((c, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Image
              src={"/placeholderperson.png"}
              alt="profilepic"
              width={50}
              height={50}
              className="rounded-full aspect-square object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold">{c.name}</p>
                <span className="text-gray-500 text-sm">
                  {new Date(c.createdAt).toLocaleString()}
                </span>
              </div>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
