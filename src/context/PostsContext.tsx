import { createContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useDebounce } from "../hooks";
import { getPostByKeyword } from "../services/get-posts";
import { transformApiPostsResponse } from "../utils/transform-api-posts-response";
import type { Post } from "../interfaces";

interface PostsContextProps {
  error: boolean;
  errorMessage: string | null;
  keyword: string;
  loading: boolean;
  posts: Post[];
  onChangeKeyword: (keyword: string) => void;
}

const initialPostsContextValues: PostsContextProps = {
  error: false,
  errorMessage: null,
  loading: false,
  keyword: "",
  posts: [],
  onChangeKeyword: () => {},
};

const PostsContext = createContext<PostsContextProps>(initialPostsContextValues);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ isError: boolean; message: string | null }>({ isError: false, message: null });
  const [keyword, setKeyword] = useState("");

  // Aplicamos un debounce de 1s antes de disparar la petición.
  const debounceFetch = useDebounce(keyword, 1000);

  // Generamos una diccionario para no repertir peticiones ya realizadas con la misma keyword.
  const cachePosts = useRef<Record<string, Post[]>>({});

  const onChangeKeyword = (word: string) => {
    setKeyword(word);
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (!debounceFetch) return;

      if (cachePosts.current[debounceFetch]) {
        setPosts(cachePosts.current[debounceFetch]);
        return;
      }

      try {
        setLoading(true);

        const data = await getPostByKeyword(debounceFetch);
        const Posts = transformApiPostsResponse(data.posts);

        cachePosts.current[debounceFetch] = Posts;

        setPosts(Posts);
      } catch (err) {
        if (err instanceof Error) {
          setError({ isError: true, message: err.message });
        } else {
          setError({ isError: true, message: String(err) });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [debounceFetch]);

  return <PostsContext.Provider value={{ posts, keyword, onChangeKeyword, loading, error: error.isError, errorMessage: error.message }}>{children}</PostsContext.Provider>;
};

export default PostsContext;
