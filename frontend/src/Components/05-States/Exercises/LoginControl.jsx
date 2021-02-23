'use strict'; 

import {useState} from 'react'; 

const LoginControl = ({update}) => {

    // usename & password
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    
    const saveValues = e => {
        e.preventDefault(); // default action
        console.log(username,password);
        update();
    }

    return(
        <>
            <form onSubmit={saveValues}>
                <label> Username: </label>
                <input 
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label> Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default LoginControl; 