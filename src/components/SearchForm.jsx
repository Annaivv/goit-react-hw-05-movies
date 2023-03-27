const SearchForm = ({ value, onChange }) => {
  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
