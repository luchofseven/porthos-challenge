import { createContext, useState, type ReactNode } from "react";
import { apiQuotes } from "../../mocks/quotes";
import { quoteOfDay } from "../../mocks/quoteOfDay";
import { getCookie, transformApiResponse } from "../utils";
import type { QuoteProps } from "../interfaces";

interface QuotesContextProps {
  quotes: QuoteProps[];
  quoteOfDay: QuoteProps[];
  keyword: string;
  onChangeKeyword: (keyword: string) => void;
}

const initialQuotesContextValues: QuotesContextProps = {
  quotes: [],
  quoteOfDay: [],
  keyword: "",
  onChangeKeyword: () => {},
};

const QuotesContext = createContext<QuotesContextProps>(initialQuotesContextValues);

export const QuotesProvider = ({ children }: { children: ReactNode }) => {
  const [quotes] = useState<QuoteProps[]>(() => transformApiResponse(apiQuotes));
  const [qod] = useState<QuoteProps[]>(() => transformApiResponse(quoteOfDay));
  const [keyword, setKeyword] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<QuoteProps[]>(() => {
    const keyword = getCookie({ name: "lastSelectedKeyword" });

    if (keyword) {
      const filteredQuotes = quotes.filter(({ quote }) => quote.split(" ").includes(keyword));
      setKeyword(keyword);

      return filteredQuotes;
    } else {
      setKeyword("");
      return quotes;
    }
  });

  const onChangeKeyword = (keyword: string) => {
    if (keyword) {
      const filteredQuotes = quotes.filter(({ quote }) => quote.split(" ").includes(keyword));
      setFilteredQuotes(filteredQuotes);
      setKeyword(keyword);
    } else {
      setFilteredQuotes(quotes);
      setKeyword("");
    }
  };

  return <QuotesContext.Provider value={{ quotes: filteredQuotes, quoteOfDay: qod, keyword, onChangeKeyword }}>{children}</QuotesContext.Provider>;
};

export default QuotesContext;
