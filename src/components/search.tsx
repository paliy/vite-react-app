import React from 'react';

interface Props {
  searchText: string | undefined;
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Search: React.FC<Props> = ({ searchText, handleSearchChange }) => {
  return (
    <form className="relative w-1/2 flex-center mb-8">
      <label htmlFor="searchInput" className="sr-only">Search item</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search item"
        value={searchText}
        onChange={handleSearchChange}
        className="search_input peer"
      />
      {searchText && (
        <button
          type="button"
          className="clear_button"
          onClick={() => handleSearchChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
          aria-label="Clear search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 5.293a1 1 0 0 1 1.414 1.414L10 11.414l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 12 5.293 8.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>
      )}
    </form>
  );
};

export default Search;