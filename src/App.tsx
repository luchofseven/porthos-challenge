import { Layout } from "./layout/Layout";
import { QuotesContainer } from "./quotes/components/QuotesContainer";
import { Quote } from "./quotes/components/Quote";
import { SelectKeywordQuote } from "./quotes/components/SelectKeywordQuote";
import { useQuotes } from "./hooks/useQuotes";
import { Error, Loader } from "./shared/components";

function App() {
  const { quotes, keyword, loading, error, errorMessage } = useQuotes();

  return (
    <Layout>
      {/* Loader mientras esperamos la respuesta de la API */}
      {loading && !error && <Loader />}

      {/* Selector de keywords disponibles */}
      {!loading && !error && <SelectKeywordQuote />}

      {/* Componente contenedor custom para renderizar hijos con una pequeña animación */}
      {!loading && !error && (
        <QuotesContainer className="quotes-container">
          {quotes?.map((data) => (
            <Quote key={data.quote} id={data.id} quote={data.quote} author={data.author} />
          ))}
        </QuotesContainer>
      )}

      {!loading && !quotes?.length && !error && (
        <span className="without-quote-container">
          No hay citas para la palabra <i className="text-highlight">{keyword}.</i>
        </span>
      )}

      {!loading && error && errorMessage && <Error message={errorMessage} />}
    </Layout>
  );
}

export default App;
