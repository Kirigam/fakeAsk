import React from 'react';

const Search = ({value, onChange}) => {
    return <input type="text" name="search" 
            placeholder="search" value={value}
            onChange={onChange} />
};

export default Search;