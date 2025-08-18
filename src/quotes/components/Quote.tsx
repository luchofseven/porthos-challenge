import { QuoteMoreAboutBtn } from "./QuoteMoreAboutBtn";
import { QuoteDownloadTxtBtn } from "./QuoteDownloadTxtBtn";
import type { Quote as QuoteProps } from "../../interfaces";

export const Quote = ({ id, quote, author, qod }: QuoteProps) => {
  return (
    <article key={id} className="quotes-article">
      <span className="quotes-article-quote">&ldquo;{quote}&rdquo;</span>
      <span className="quotes-article-author">{author}</span>
      <picture className="quotes-article-background-image">
        <img src="/quote.webp" alt="quote background image" />
      </picture>

      <QuoteMoreAboutBtn quote={quote} />

      {qod && <QuoteDownloadTxtBtn id={id} quote={quote} author={author} />}
    </article>
  );
};
