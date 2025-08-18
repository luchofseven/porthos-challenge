import { createContext, useEffect, useState, type ReactNode } from "react";
import { getQuotes } from "../services";
import { getCookie } from "../utils";
import type { Quote } from "../interfaces";

interface QuotesContextProps {
  error: boolean;
  errorMessage: string | null;
  loading: boolean;
  keyword: string;
  quotes: Quote[];
  onChangeKeyword: (keyword: string) => void;
}

const initialQuotesContextValues: QuotesContextProps = {
  error: false,
  errorMessage: null,
  loading: false,
  keyword: "",
  quotes: [],
  onChangeKeyword: () => {},
};

const QuotesContext = createContext<QuotesContextProps>(initialQuotesContextValues);

export const QuotesProvider = ({ children }: { children: ReactNode }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ isError: boolean; message: string | null }>({ isError: false, message: null });
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (keyword: string) => {
    if (keyword) {
      const filteredQuotes = quotes?.filter(({ quote }) => quote.split(" ").includes(keyword));
      setFilteredQuotes(filteredQuotes);
      setKeyword(keyword);
    } else {
      setFilteredQuotes(quotes);
      setKeyword("");
    }
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);
        const data = await getQuotes();
        setQuotes(data.quotes);
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

    fetchQuotes();
  }, []);

  useEffect(() => {
    if (keyword) {
      setFilteredQuotes(quotes?.filter(({ quote }) => quote.split(" ").includes(keyword)));
    } else {
      setFilteredQuotes(quotes);
    }
  }, [quotes, keyword]);

  useEffect(() => {
    const keyword = getCookie({ name: "lastSelectedKeyword" });

    if (keyword) {
      setKeyword(keyword);
      const quoteByKeyword = quotes?.find(({ quote }) => quote.split(" ").includes(keyword));

      if (quoteByKeyword) {
        const randomQuotes = quotes?.filter((quote) => quote.id !== quoteByKeyword.id);
        setFilteredQuotes([quoteByKeyword, ...randomQuotes]);
      } else {
        const filteredQuotes = quotes?.filter(({ quote }) => quote.split(" ").includes(keyword));
        setFilteredQuotes(filteredQuotes);
      }
    } else {
      setKeyword("");
      setFilteredQuotes(quotes);
    }
  }, [quotes]);

  return <QuotesContext.Provider value={{ quotes: filteredQuotes, keyword, onChangeKeyword, loading, error: error.isError, errorMessage: error.message }}>{children}</QuotesContext.Provider>;
};

export default QuotesContext;
