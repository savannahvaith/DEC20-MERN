'use strict';
const Child = ({name,age,origin}) => {

    // const name = props.name;

    return (
        <>
            {/* <p>Hello, {props.name}</p> */}
            <p>Hello, {name} from {origin} who is {age} years old</p>
        </>
    );

}
export default Child; 