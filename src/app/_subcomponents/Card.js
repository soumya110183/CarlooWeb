"use client";

import { useRef } from "react";
import CardComp from "./CardComp";

export default function Card({ blogs = [] }) {
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const el = scrollRef.current;
    el.isDown = true;
    el.startX = e.pageX - el.offsetLeft;
    el.scrollLeftStart = el.scrollLeft;
    el.classList.add("cursor-grabbing");
  };

  const handleMouseUpOrLeave = () => {
    const el = scrollRef.current;
    el.isDown = false;
    el.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    const el = scrollRef.current;
    if (!el.isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - el.startX) * 1.5;
    el.scrollLeft = el.scrollLeftStart - walk;
  };

  // Helper function to truncate text
  const truncateText = (text, maxLength = 100) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <div
      ref={scrollRef}
      className="flex items-center gap-6 overflow-x-auto py-2 lg:px-5 mt-10 cursor-grab select-none hide-scrollbar scroll-smooth"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseUp={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
    >
      {blogs.length === 0 ? (
        <div className="w-full text-center py-10 text-gray-500">
          No blogs found
        </div>
      ) : (
        blogs.map((blog) => {
          const firstLine =
            blog.blocks?.[0]?.content
              ?.replace(/<[^>]+>/g, "") // remove HTML tags
              .split("\n")[0] || "";

          return (
            <div className="flex-shrink-0" key={blog._id}>
              <CardComp
                heading={blog.title}
                paragraph={truncateText(firstLine, 100)}
                img={blog.image}
                slug={blog.slug}
              />
            </div>
          );
        })
      )}
    </div>
  );
}