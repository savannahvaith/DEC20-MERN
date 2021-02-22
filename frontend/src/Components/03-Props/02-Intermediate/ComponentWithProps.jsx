'use strict';
import ArrayItem from "./ArrayItem";

 
const ComponentWithProps = (props) => {

    const {numberProp, booleanProp, strProp, objProp, arrayProp, funcProp, addingMyOwn} = props; 

    // print an object
    const objectPropsDisplay = []; 

    for(let[k,v] of Object.entries(objProp)){
        objectPropsDisplay.push(<li key={k}> Value: {v}</li>);
    }
    

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
            <p>{objectPropsDisplay}</p>
        </>
    );
}

export default ComponentWithProps; 