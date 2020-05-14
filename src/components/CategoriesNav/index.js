import React from 'react';
import useFilter from '../../hooks/useFilter';
import './style.css';

const Search = () => (
    <input type="search" className="emoji-search"
        onChange={useFilter()}
        autoFocus/>
);

export default Search;
