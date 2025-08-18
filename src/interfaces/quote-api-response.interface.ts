export interface ApiQuotesProps {
  limit: number;
  quotes: Quote[];
  skip: number;
  total: number;
}

export interface Quote {
  author: string;
  id: number;
  qod?: boolean;
  quote: string;
}
