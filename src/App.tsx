import { useQuotes } from "./hooks/useQuotes";
import { QuotesContainer } from "./quotes/components/QuotesContainer";
import { SelectKeywordQuote } from "./quotes/components/SelectKeywordQuote";
import { Quote } from "./quotes/components/Quote";
import { Layout } from "./layout/Layout";

// const API_URL = "https://zenquotes.io/api/";

// [mode] = retreval type [random,today,quotes]

function App() {
  const { quotes, keyword } = useQuotes();

  return (
    <Layout>
      {/* Selector de keywords disponibles */}
      <SelectKeywordQuote />

      {/* Componente contenedor custom para renderizar hijos con una pequeña animación */}
      <QuotesContainer className="quotes-container">
        {quotes.map((data) => (
          <Quote key={data.quote} quote={data.quote} author={data.author} />
        ))}
      </QuotesContainer>

      {!quotes.length && (
        <span className="without-quote-container">
          No hay citas para la palabra <i className="text-highlight">{keyword}.</i>
        </span>
      )}
    </Layout>
  );
}

export default App;
