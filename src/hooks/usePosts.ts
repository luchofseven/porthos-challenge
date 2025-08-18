import { useContext } from "react";
import PostsContext from "../context/PostsContext";

export const usePost = () => {
  const postsContext = useContext(PostsContext);

  if (!postsContext) {
    throw new Error("usePost must be used in a PostsProvider");
  }

  return postsContext;
};
