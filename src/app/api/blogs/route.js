

import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/modals/blog';
import { NextResponse } from 'next/server';


export async function GET() {
  await connectToDatabase();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function GET_BY_ID(req) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function POST(req) {
  await connectToDatabase();
  const body = await req.json();
  const { adminName, title, blocks, image,adminPhoto } = body; 


  if (!adminName || !title || !image || !blocks || !Array.isArray(blocks)) {
    return NextResponse.json({ error: 'Title, adminName, image, and blocks are required' }, { status: 400 });
  }

  const slug = title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

  const newBlog = await Blog.create({ title, slug, blocks, image, adminName,adminPhoto });
  return NextResponse.json(newBlog, { status: 201 });
}



export async function PUT(req) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id)

  if (!id) {
    return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
  }

  try {
    const body = await req.json();
    const { adminName, title, blocks, image, adminPhoto } = body;

   
    let slug;
    if (title) {
      slug = title
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-");
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(blocks && { blocks }),
        ...(image && { image }),
        ...(adminName && { adminName }),
        ...(adminPhoto && { adminPhoto }),
      },
      { new: true } 
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
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
