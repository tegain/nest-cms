import { Document } from 'mongoose';
import { UserInterface } from '@modules/users/interfaces/user.interface';

export interface PostInterface extends Document {
  title: string;
  slug: string;
  content: string;
  pictureUrl: string;
  publishedAt: number | null;
  status: PostStatus;
  visibility: PostVisibility;
  author: UserInterface;
}

export enum PostStatus {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}

export enum PostVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}
