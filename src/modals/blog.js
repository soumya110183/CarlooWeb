import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  type: { type: String, required: true }, // 'text' or 'image'
  content: String,  // for text blocks
  src: String,      // for image blocks
  publicId: String, // for Cloudinary images
});

const BlogSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },  // main image URL
    adminName: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    blocks: [BlockSchema],  // <- updated field to store blocks
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
