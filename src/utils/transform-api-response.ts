import type { ApiQuote, Quote } from "../interfaces";

export const transformApiResponse = (quotes: ApiQuote[]): Quote[] =>
  quotes.map((quote) => ({
    quote: quote.q,
    author: quote.a,
  }));
