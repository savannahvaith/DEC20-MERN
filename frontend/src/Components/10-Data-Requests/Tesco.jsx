import { useEffect, useState } from "react";
import axios from 'axios';
import { Spinner } from 'reactstrap';
import Employee from "./Employee";

const Tesco = () => {

    // error 
    const [error, setError] = useState(null);
    //loading
    const [isLoaded, setLoaded] = useState(false);
    //data
    const [info, setInfo] = useState([]);

    useEffect(() => {
        setTimeout( () => {
            axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
                .then((response) => {
                    setLoaded(true);
                    // data -> data -> array 
                    setInfo(response.data.data);
                })
                .catch((error) => {
                    setLoaded(true);
                    setError(error);
                })
        }, 5000)
    },[])
        

    if (error) {
        return <p>Oops.. something went wrong! {error.message}</p>
    } else if (!isLoaded) {
        return (
            <>
                <p>
                    Please wait.. we are loading your information!
                </p>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </>
        )
    } else {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <th>Age:</th>
                        <th>Salary:</th>
                    </tr>
                    {info.map((person) => (
                        <tr>
                            <Employee person={person} />
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }




}

export default Tesco; 