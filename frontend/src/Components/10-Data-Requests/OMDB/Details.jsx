import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react'; 
import axios from 'axios';
import {API_URL} from './CONSTS.json';

const Details = () => {
    const {id} = useParams(); 
    const history = useHistory();
    const [details, setDetails] = useState([]);

    useEffect( () => {
        axios.get(`${API_URL}&i=${id}`)
        .then(response => setDetails(response.data))
        .catch(err => console.error(err))
    })

    return(
        <div className="container">
            <br/>
            <button style={{float:"right"}}type="button" className="btn btn-outline-info" onClick={() => history.push("/OMDB/Search")}>Return Home</button>
            <div className="row text-center">
                <div className="col-md">
                    <img src={details.Poster} alt="Poster picture"height="500px" width="500px"/>
                </div>
                </div>
                <div className="row">
                <div className="col-md">
                    <table>
                        <tbody>
                            <tr>
                                <td> Title:</td>
                                <td> <h3>{details.Title}</h3></td>
                            </tr>
                            <tr>
                                <td> Year:</td>
                                <td> {details.Year}</td>
                            </tr>
                            <tr>
                                <td>Actors:</td>
                                <td>{details.Actors}</td>
                            </tr>
                            <tr>
                                <td>Plot:</td>
                                <td>{details.Plot}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Details;