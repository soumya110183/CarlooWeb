

import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/modals/blog';
import { NextResponse } from 'next/server';


export async function GET() {
  await connectToDatabase();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}


export async function POST(req) {
  await connectToDatabase();
  const body = await req.json();
  const { adminName, title, blocks, image } = body;  // blocks instead of content

  if (!adminName || !title || !image || !blocks || !Array.isArray(blocks)) {
    return NextResponse.json({ error: 'Title, adminName, image, and blocks are required' }, { status: 400 });
  }

  const slug = title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

  const newBlog = await Blog.create({ title, slug, blocks, image, adminName });
  return NextResponse.json(newBlog, { status: 201 });
}





export async function DELETE(req) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
  }

  try {
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Blog deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
