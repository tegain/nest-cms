export interface PostInterface {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  pictureUrl?: string;
  publishedAt?: Date | string;
  status: PostStatus | string;
  visibility: PostVisibility | string;
  author: string;
  commentsEnabled?: boolean;
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
