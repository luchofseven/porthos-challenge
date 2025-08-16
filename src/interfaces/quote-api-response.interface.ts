export interface ApiQuoteProps {
  a: string;
  c: string;
  h: string;
  q: string;
}

export type ApiQuoteOfDayProps = Omit<ApiQuoteProps, "c">;
