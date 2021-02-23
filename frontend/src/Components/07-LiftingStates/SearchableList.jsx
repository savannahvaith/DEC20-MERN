import List from './List';
import SearchBar from './SearchBar';
import Todo from './Todo.json';
import {useState} from 'react';

const SearchableList = () => {

    const [query, setQuery] = useState(``);
    const [check, setCheck] = useState(false);

    const handleQuery = e => {
        // console.log(e.target.value);
        setQuery(e.target.value);
    }

    const handleCheck = () => {
        setCheck(c => !c);
    }

    return (
        <>
            <SearchBar 
                stateQuery={query} 
                updateQuery={handleQuery} 
                stateCheck={check} 
                updateCheck={handleCheck} 
            />
            <List list={Todo} check={check} query={query}/>
        </>
    )
}

export default SearchableList; 