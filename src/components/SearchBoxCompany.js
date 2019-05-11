import React from 'react';
import './SearchBox.css';


const SearchBoxCompany =({ searchChange }) =>{
  return(
    
    <div className="searchField companyField">
      <input 
      className ="pa3 ba br3 shadow-4 b--green bg-lightest-blue searchInput"
      type='search'
      placeholder='Search by company...'
      onChange = { searchChange }
      />
    </div>
    )

}

export default SearchBoxCompany;