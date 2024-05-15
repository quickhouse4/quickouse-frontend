import React, { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className='search'>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='search here.....'
          style={{ "padding": "8px" }}
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default SearchBar