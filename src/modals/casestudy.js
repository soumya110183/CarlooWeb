

import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  type: { type: String, required: true }, 
  content: String,  
  src: String,      
  publicId: String, 
});

const casestudy = new  mongoose.Schema(
  {
    image: { type: String, required: true }, 
    adminName: { type: String, required: true },
    adminPhoto: { type: String, required: false },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    blocks: [BlockSchema],  
  },
  {
    timestamps: true,
  }
);


export default mongoose.models.casestudy || mongoose.model('casestudy', casestudy);
