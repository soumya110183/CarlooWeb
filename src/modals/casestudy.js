

import mongoose from 'mongoose';

const casestudy = new mongoose.Schema(
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
       slug: {
      type: String,
      required: true,
      unique: true, 
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


export default mongoose.models.casestudy || mongoose.model('casestudy', casestudy);
