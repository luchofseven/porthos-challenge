import type { Post } from "../interfaces";

export const transformApiPostsResponse = (post: Post[]): Post[] => {
  return post?.map((item) => ({
    id: item.id,
    body: item.body,
    tags: item.tags,
  }));
};
