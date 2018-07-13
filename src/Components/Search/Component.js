import React from 'react';

const Search = ({value, onChange}) => {
    return <input type="text" className='d-none d-md-block' name="search" 
        placeholder=" Search..." value={value} onChange={onChange} />  
};

export default Search;