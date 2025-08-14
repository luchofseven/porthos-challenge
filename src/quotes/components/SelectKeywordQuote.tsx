import { availableKeywords } from "../../../mocks/keywords";

export const SelectKeywordQuote = ({ onChangeKeyword }: { onChangeKeyword: (keyword: string) => void }) => {
  return (
    <section className="available-keywords-container" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChangeKeyword(e.target.value)}>
      <label htmlFor="selectKeyword">Palabras claves disponibles:</label>
      <select name="selectKeyword" id="selectKeyword">
        <option value="">TODAS / ALL</option>
        {Object.entries(availableKeywords).map(([name, value]) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </section>
  );
};
