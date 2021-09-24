import React from 'react';

const Search = (props) => {

    const handleChange = (e) => {
        props.handleSearch(e.target.value);
    }
    return (
    <>
    <div className="search-box">
    <input type="text" 
      className="search-bar" 
      placeholder="Search..."
      onChange={handleChange}
      value={props.query}
      onKeyPress={props.search} />
   </div>
   </>
   )
    
    }

export default Search;