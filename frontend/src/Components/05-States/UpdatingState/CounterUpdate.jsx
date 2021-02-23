'use strict'; 

import {useState} from 'react'; 
import ChildComponent from '../AddingState/ChildComponent';

const CounterUpdate = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        console.log(`I am in the incremeent function`); 
        setCounter(c => c+1);
    }

    return(
        <>
        <p>The value of counter is: {counter}</p>
            <button onClick={increment}> ++</button>
            <button onClick={() => setCounter(c => c-1)}> --</button>
            <ChildComponent count={counter}/>
        </>
    )


}

export default CounterUpdate; 