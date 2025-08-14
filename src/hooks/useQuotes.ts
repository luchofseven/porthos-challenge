import { useState } from "react";
import { apiQuotes } from "../../mocks/quotes";
import { transformApiResponse } from "../utils/transform-api-response";
import type { Quote as IQuote } from "../interfaces";

export const useQuotes = () => {
  const [quotes] = useState<IQuote[]>(() => transformApiResponse(apiQuotes));
  const [filteredQuotes, setFilteredQuotes] = useState<{ keyword: string | null; quotes: IQuote[] }>({ keyword: null, quotes });

  const onChangeKeyword = (keyword: string) => {
    if (keyword) {
      const filteredQuotes = quotes.filter(({ quote }) => quote.split(" ").includes(keyword));
      setFilteredQuotes({ keyword, quotes: filteredQuotes });
    } else {
      setFilteredQuotes({ keyword: null, quotes });
    }
  };

  return {
    quotes,
    filteredQuotes,
    onChangeKeyword,
  };
};
