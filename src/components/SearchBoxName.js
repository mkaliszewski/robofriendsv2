import React from 'react';
import './SearchBox.css';


const SearchBoxName =({ searchChange }) =>{
  return(
    <div className="searchField nameField">
      <input 
      className ="pa3 ba br3 shadow-4 b--green bg-lightest-blue searchInput"
      type='search'
      placeholder='Search by name...'
      onChange = { searchChange }
      />
    </div>
    )

}

export default SearchBoxName;