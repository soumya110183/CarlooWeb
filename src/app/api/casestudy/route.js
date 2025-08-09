

import { connectToDatabase } from '@/lib/mongodb';
import casestudy from '@/modals/casestudy';
import { NextResponse } from 'next/server';


export async function GET() {
  await connectToDatabase();
  const casestudydb = await casestudy.find().sort({ createdAt: -1 });
  return NextResponse.json(casestudydb);
}


export async function POST(req) {
  await connectToDatabase();
  const body = await req.json();
  const { adminName,title, content, image } = body;
 

  if (!adminName ||!title || !content || !image) {
    return NextResponse.json({ error: 'Title, content, and image are required' }, { status: 400 });
  }

    const slug = title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

  const newBlog = await casestudy.create({ title,slug, content, image,adminName });
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
