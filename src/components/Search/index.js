import React from 'react';
import useFilter from '../../hooks/useFilter';
import './style.css';

const Search = () => (
    <input type="search" className="emoji-search"
           placeholder="Search emojis"
        onChange={useFilter()}
        autoFocus/>
);

export default Search;
