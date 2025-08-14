import { availableKeywords } from "../../../mocks/keywords";
import type { Quote as IQuote } from "../../interfaces";

export const Quote = ({ quote, author }: IQuote) => {
  const keywordMatch = quote.split(" ").find((word) => {
    return Object.hasOwnProperty.call(availableKeywords, word);
  });

  return (
    <article key={quote} className="quotes-article">
      <span className="quotes-article-quote">&ldquo;{quote}&rdquo;</span>
      <span className="quotes-article-author">{author}</span>
      <picture className="quotes-article-background-image">
        <img src="/quote.webp" alt="quote background image" />
      </picture>

      {keywordMatch && (
        <button type="button" onClick={() => alert("Llamar a la api y obtener mas citas sobre el tema")} className="quotes-article-quote-keyword-match">
          Más sobre <span>{keywordMatch}</span>
        </button>
      )}
    </article>
  );
};
