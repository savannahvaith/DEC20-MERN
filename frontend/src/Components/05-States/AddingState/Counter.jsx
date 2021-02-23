'use strict';
import { useState } from 'react';
import ChildComponent from './ChildComponent';

const Counter = () => {
    // value, functionToUpdate
    const [count, setCount] = useState(5);

    return (
        <>
            <ChildComponent count={count} />
            <p>The current value of count is: {count}</p>
        </>
    )

}

export default Counter; 