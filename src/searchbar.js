import React from 'react';

const SearchBar =(props) =>{
    return(
        <div className="search-bar form-group">
        <input
        type="text"
        className="form-control"
        placeholder="search"
        value={props.seachTerm}
        onChange={(event) =>{
            props.handleInput(event.target.value)
        }} 
        />
        
        </div>
    )
}

export default SearchBar;