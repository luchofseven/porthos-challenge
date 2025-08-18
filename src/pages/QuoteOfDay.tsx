import { useRandomQuote } from "../hooks";
import { Layout } from "../layout/Layout";
import { Quote, QuotesContainer } from "../quotes/components";
import { Error, Loader } from "../shared/components";

export const QuoteOfDayPage = () => {
  const { randomQuote, loading, error, errorMessage } = useRandomQuote();

  return (
    <Layout>
      {loading && !error && <Loader />}

      {!loading && !error && randomQuote && (
        <QuotesContainer className="quotes-container">
          <Quote key={randomQuote?.id} id={randomQuote.id} author={randomQuote?.author} quote={randomQuote?.quote} qod />
        </QuotesContainer>
      )}

      {!loading && !error && !randomQuote && <span className="without-quote-container">No random quote to show.</span>}

      {!loading && error && errorMessage && <Error message={errorMessage} />}
    </Layout>
  );
};
