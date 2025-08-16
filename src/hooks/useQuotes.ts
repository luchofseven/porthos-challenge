import { useContext } from "react";
import QuotesContext from "../context/QuotesContex";

export const useQuotes = () => {
  const quoteContext = useContext(QuotesContext);

  if (!quoteContext) {
    throw new Error("useQuotes must be used in a QuotesProvider");
  }

  return quoteContext;
};
