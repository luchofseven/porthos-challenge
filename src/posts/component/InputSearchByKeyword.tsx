import { usePost } from "../../hooks";

export const InputSearchByKeyword = () => {
  const { onChangeKeyword, keyword } = usePost();

  return (
    <div className="search-post-by-keyword-container">
      <label htmlFor="search-post-by-keyword">Keyword</label>
      <input id="search-post-by-keyword" type="text" value={keyword} onChange={(e) => onChangeKeyword(e.target.value)} placeholder="love" />
    </div>
  );
};
