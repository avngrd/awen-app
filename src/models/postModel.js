import mongoose from 'mongoose';

import { Schema, model, models } from 'mongoose';

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
// export default mongoose.model('Post', postSchema);

const Post = models.post || model('post', postSchema);
export default Post;
