import { useState } from 'react';

import { Input, Label } from '../Atoms'
// import './style.css';

const SearchTodo = props => {
    
    const [searchOp, setSearchOp] = useState({ text: '', result: [] }); // search Feature

    // Search Feature
    const handleSearch = value => {
        setSearchOp({...searchOp, text: value });
        filterData(value);
    };
    const filterData = value => {
        const lowercasedValue = value.toLowerCase().trim();
        // if (lowercasedValue === "") return 'todos.data';
        // if (lowercasedValue !== "") {
        //         const filteredData = todos.data.filter(item => 
        //             item.toString().toLowerCase().includes(lowercasedValue) )
        //     setSearchOp({...searchOp, result: filteredData });
        // }
    };
    return  <div className='search-todo'>
                <Label id='search' label='Search' />
                <Input type='text' name='search' placeholder='Type to search...' value={searchOp.text} 
                       onChange={e => handleSearch(e.target.value)} id='search' />
            </div>
};

export default SearchTodo;