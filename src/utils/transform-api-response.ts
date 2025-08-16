import type { ApiQuoteOfDayProps, ApiQuoteProps, QuoteProps } from "../interfaces";

export const transformApiResponse = (quotes: ApiQuoteProps[] | ApiQuoteOfDayProps[]): QuoteProps[] =>
  quotes.map((quote) => ({
    quote: quote.q,
    author: quote.a,
  }));
