'use strict'; 

import {useState} from 'react';


const DifferentStates = () => {

    // create my state
    const [edit, setEdit] = useState(false); 

    return(
        <>
            <p>The value of edit is: {edit};</p>
            { edit ? <p>True</p> : <p>False</p>}
            <button onClick={ () => setEdit(c => !c)}>Update Edit</button>
        </>
    )

}

export default DifferentStates; 