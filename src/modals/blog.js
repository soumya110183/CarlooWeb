import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  type: { type: String, required: true }, 
  content: String,  
  src: String,      
  publicId: String, 
});

const CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const BlogSchema = new mongoose.Schema(
  {
    image: { type: String, required: true }, 
    adminName: { type: String, required: true },
    adminPhoto: { type: String, required: false },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    blocks: [BlockSchema],  
     comments: [CommentSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
