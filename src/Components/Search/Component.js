import React from 'react';
import { Col } from 'reactstrap';

const Search = ({value, onChange}) => {
    return <input type="text" className='d-none d-md-block' name="search" placeholder=" Search..." value={value} onChange={onChange} />  
};

export default Search;