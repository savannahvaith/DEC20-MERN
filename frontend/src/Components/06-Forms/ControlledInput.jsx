'use strict'
import {useState} from 'react'; 

const ControlledInput = () => {

    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const dataToSend = JSON.stringify({username});
        console.log(dataToSend);
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
                id="username" 
                type="text" 
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default ControlledInput; 