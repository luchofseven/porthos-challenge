import { QuoteMoreAboutBtn } from "./QuoteMoreAboutBtn";
import { QuoteDownloadTxtBtn } from "./QuoteDownloadTxtBtn";
import type { QuoteProps } from "../../interfaces";

export const Quote = ({ quote, author, qod }: QuoteProps) => {
  return (
    <article key={quote} className="quotes-article">
      <span className="quotes-article-quote">&ldquo;{quote}&rdquo;</span>
      <span className="quotes-article-author">{author}</span>
      <picture className="quotes-article-background-image">
        <img src="/quote.webp" alt="quote background image" />
      </picture>

      <QuoteMoreAboutBtn quote={quote} />

      {qod && <QuoteDownloadTxtBtn quote={quote} author={author} />}
    </article>
  );
};
