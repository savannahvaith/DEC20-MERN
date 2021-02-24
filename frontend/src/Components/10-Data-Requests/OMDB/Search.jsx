import axios from 'axios';
import { API_URL } from './CONSTS.json';
import { useHistory } from 'react-router-dom';
const { useState } = require("react");
const { default: SearchBar } = require("./SearchBar");
const { default: SearchResults } = require("./SearchResults");


const Search = () => {
    const history = useHistory();

    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);
    const [err, setErr] = useState('');

    const handleChange = ({ target }) => {
        setQuery(target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`${API_URL}&s=${query}`)
            .then(res => {
                if(res.data.Error){
                    setErr(res.data.Error);
                }else{
                    setFilms(res.data.Search);
                    setErr('');
                }
            }).catch(err => {
                setErr(err);
            })
    }

    const getDetails = (id) => {
        console.log(id);
        history.push(`/OMDB/details/${id}`);
    }

    return (
        <>
            <SearchBar query={query} handleChange={handleChange} search={handleSearch} />
            {err ? 
            <div className="alert alert-danger">{err}</div>
                :
                <SearchResults films={films} getDetails={getDetails} />
            }
        </>
    )


}

export default Search; 