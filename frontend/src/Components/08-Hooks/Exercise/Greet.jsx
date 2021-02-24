import { useEffect } from 'react';

const Greet = ({ name }) => {
    const message = `Hello, ${name}!`;

    useEffect(() => {
        console.log(`Running useEffect ${name}`);
        document.title = `Greetings to ${name}`;
    }, [name]);

    return <div>{message}</div>;
}

export default Greet;