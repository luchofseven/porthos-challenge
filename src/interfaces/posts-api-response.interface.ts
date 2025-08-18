export interface ApiPostsResponse {
  posts: ApiPost[];
  total: number;
  skip: number;
  limit: number;
}

export interface ApiPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: ApiReactions;
  views: number;
  userId: number;
}

export interface ApiReactions {
  likes: number;
  dislikes: number;
}

export interface Post {
  id: number;
  body: string;
  tags: string[];
}
