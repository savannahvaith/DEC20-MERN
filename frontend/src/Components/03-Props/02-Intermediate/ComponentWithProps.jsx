'use strict';
import ArrayItem from "./ArrayItem";

 
const ComponentWithProps = (props) => {

    const {numberProp, booleanProp, strProp, objProp, arrayProp, funcProp, addingMyOwn} = props; 

    const values = arrayProp.map((item) => <li>{item}</li>);
    

    return(
        <> 
            <p>String Prop : {strProp}</p>
            <p>Number Prop : {numberProp}</p>
            <p>func Prop : {funcProp()}</p>
            <p>Adding my own: {addingMyOwn}</p>
            
            {
                arrayProp.map((item,i) => (
                    <ArrayItem key={i} item={item}/>
                ))
            }
        </>
    );
}

export default ComponentWithProps; 