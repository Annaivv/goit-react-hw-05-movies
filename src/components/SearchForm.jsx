const SearchForm = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name={value} onChange={onChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
