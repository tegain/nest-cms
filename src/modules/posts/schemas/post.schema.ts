import * as mongoose from 'mongoose';
import { PostStatus, PostVisibility } from '@modules/posts/interfaces/post.interface';

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  pictureUrl: {
    type: String,
    trim: true,
  },
  publishedAt: {
    type: Number,
    trim: true,
    default: new Date().getTime(),
  },
  status: {
    type: String,
    trim: true,
    default: PostStatus.PUBLISHED,
    enum: [PostStatus.PUBLISHED, PostStatus.DRAFT, PostStatus.DELETED],
  },
  visibility: {
    type: String,
    trim: true,
    default: PostVisibility.PUBLIC,
    enum: [PostVisibility.PUBLIC, PostVisibility.PRIVATE],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});
