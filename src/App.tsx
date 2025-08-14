import { useQuotes } from "./hooks/useQuotes";
import { Quote } from "./quotes/components/Quote";
import { SelectKeywordQuote } from "./quotes/components/SelectKeywordQuote";

// const API_URL = "https://zenquotes.io/api/";

// [mode] = retreval type [random,today,quotes]

function App() {
  const { filteredQuotes, onChangeKeyword } = useQuotes();

  return (
    <>
      <header>
        <h1>Porthocitas</h1>
      </header>

      <main>
        <SelectKeywordQuote onChangeKeyword={onChangeKeyword} />

        <section className="quotes-container">
          {!filteredQuotes.quotes.length && <span>No hay citas para la palabra {filteredQuotes.keyword}</span>}

          {filteredQuotes.quotes.map((data) => (
            <Quote key={data.quote} quote={data.quote} author={data.author} />
          ))}
        </section>
      </main>

      <footer>
        Inspirational quotes provided by
        <a href="https://zenquotes.io/" target="_blank">
          ZenQuotes API
        </a>
      </footer>
    </>
  );
}

export default App;
