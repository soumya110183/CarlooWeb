
import { connectToDatabase } from "@/lib/mongodb";

import casestudy from "@/modals/casestudy";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { blogId, name, email, text } = body;
    console.log(blogId+"hi")

    if (!blogId || !name || !email || !text) {
      return new Response(JSON.stringify({ message: "All fields required" }), { status: 400 });
    }

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return new Response(JSON.stringify({ message: "Invalid blogId" }), { status: 400 });
    }

    const blogDb = await casestudy.findById(blogId);
    if (!blogDb) return new Response(JSON.stringify({ message: "casestudy not found " }), { status: 404 });

    blogDb.comments.push({ name, email, text });
    await blogDb.save();

    return new Response(JSON.stringify({ message: "Comment added!", comments: blogDb.comments }), { status: 200 });
  } catch (err) {
    console.error("Error in POST /api/blogs/casestudy:", err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
