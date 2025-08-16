import { useQuotes } from "../hooks/useQuotes";
import { Layout } from "../layout/Layout";
import { Quote } from "../quotes/components/Quote";
import { QuotesContainer } from "../quotes/components/QuotesContainer";

export const QuoteOfDayPage = () => {
  const { quoteOfDay } = useQuotes();

  return (
    <Layout>
      <QuotesContainer className="quotes-container">
        {quoteOfDay.map(({ author, quote }) => (
          <Quote key={quote} author={author} quote={quote} qod />
        ))}
      </QuotesContainer>
    </Layout>
  );
};
