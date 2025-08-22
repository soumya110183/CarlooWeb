

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
  const { adminName, title, blocks, image,adminPhoto } = body; 


  if (!adminName || !title || !image || !blocks || !Array.isArray(blocks)) {
    return NextResponse.json({ error: 'Title, adminName, image, and blocks are required' }, { status: 400 });
  }

  const slug = title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

  const newBlog = await casestudy.create({ title, slug, blocks, image, adminName,adminPhoto });
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
    await casestudy.findByIdAndDelete(id);
    return NextResponse.json({ message: 'caseStudy deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete CaseStudy' }, { status: 500 });
  }
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

    const updatedBlog = await casestudy.findByIdAndUpdate(
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