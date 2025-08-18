import { PostTag } from "./PostTag";
import type { Post as PostProps } from "../../interfaces";

export const Post = ({ id, body, tags }: PostProps) => {
  return (
    <article key={id} className="quotes-article">
      <span className="quotes-article-quote">{body}</span>

      <div className="post-tags-container">
        {tags?.map((tag, index) => (
          <PostTag key={index} tag={tag} />
        ))}
      </div>

      <picture className="quotes-article-background-image">
        <img src="/quote.webp" alt="quote background image" />
      </picture>
    </article>
  );
};
