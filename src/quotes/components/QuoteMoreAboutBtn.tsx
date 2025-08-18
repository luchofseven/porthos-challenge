import { availableKeywords } from "../../../mocks/keywords";
import { useQuotes } from "../../hooks";
import { setCookie } from "../../utils";

export const QuoteMoreAboutBtn = ({ quote }: { quote: string }) => {
  const { onChangeKeyword } = useQuotes();

  const keywordMatch = quote.split(" ").find((word) => {
    return Object.hasOwnProperty.call(availableKeywords, word);
  });

  const handleClick = () => {
    if (keywordMatch) {
      setCookie({ name: "lastSelectedKeyword", value: keywordMatch, hours: 1 });
      onChangeKeyword(keywordMatch);
    }
  };

  return (
    keywordMatch && (
      <button type="button" onClick={handleClick} className="quotes-article-quote-keyword-match">
        More with <span>{keywordMatch}</span>
      </button>
    )
  );
};
