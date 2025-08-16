import { availableKeywords } from "../../../mocks/keywords";
import { useQuotes } from "../../hooks/useQuotes";

export const SelectKeywordQuote = () => {
  const { keyword, onChangeKeyword } = useQuotes();

  return (
    <section className="available-keywords-container">
      <label htmlFor="selectKeyword">Palabras claves disponibles:</label>
      <div>
        <select name="selectKeyword" id="selectKeyword" value={keyword} onChange={(e) => onChangeKeyword(e.target.value)}>
          <option value="">TODAS / ALL</option>
          {Object.entries(availableKeywords).map(([name, value]) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>

        {keyword !== "" && (
          <button type="button" onClick={() => onChangeKeyword("")} className="available-keywords-container-reset">
            Limpiar filtro
          </button>
        )}
      </div>
    </section>
  );
};
