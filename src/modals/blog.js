

import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    image: {
      type: String, 
    },
    adminName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);


export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
