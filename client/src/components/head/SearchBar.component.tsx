import React, { useState } from 'react';

interface SearchBarProps {
  searchItems: string[];
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  const onSearch = (searchTerm: string) => {
    console.log(searchTerm);
  }

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <button
        className="btn"
        type="submit"
        onClick={() => onSearch(searchTerm)}
      >
        <i className="fas fa-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </i>
      </button>
    </form>
  );
};


