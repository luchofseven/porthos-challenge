import { useEffect } from "react";
import { usePost } from "../hooks";
import { Layout } from "../layout/Layout";
import { QuotesContainer } from "../quotes/components";
import { Post, InputSearchByKeyword } from "../posts/component";
import { Error, Loader } from "../shared/components";

export const SearchPostsPage = () => {
  const { posts, keyword, loading, error, errorMessage } = usePost();

  useEffect(() => {
    document.title = "Porthoquotes - Search posts";
  }, []);

  return (
    <Layout>
      <InputSearchByKeyword />

      {loading && <Loader />}

      {!loading && !error && posts.length > 0 && (
        <QuotesContainer className="quotes-container">
          {posts?.map((post) => (
            <Post key={post.id} id={post.id} body={post.body} tags={post.tags} />
          ))}
        </QuotesContainer>
      )}

      {!loading && !error && posts.length === 0 && keyword && (
        <span className="without-quote-container">
          No posts to show with keyword <span className="text-highlight">{keyword}</span>.
        </span>
      )}

      {!loading && !error && posts.length === 0 && !keyword && <span className="without-quote-container">Please enter text to begin your search.</span>}

      {!loading && error && errorMessage && <Error message={errorMessage} />}
    </Layout>
  );
};
