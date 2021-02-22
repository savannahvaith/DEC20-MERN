import React from 'react';

const Individual = (props) => {

    return (
        <>
            <p key={props.id}>Hello {props.name}, i see you're from {props.city}</p>
            <a href={props.website}>Link to their website</a>
        </>
    )
}

export default Individual;