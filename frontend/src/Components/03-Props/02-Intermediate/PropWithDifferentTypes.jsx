'use strict';
import ComponentWithProps from "./ComponentWithProps";

const PropWithDifferentTypes = () => {

    // number
    const myVal = 10; 

    // boolean 
    const bool = true; 

    // String 
    const str = "Heyoooo";

    // Object
    const someObj = {
        // key value pairs - ANY data type 
        name: "Mercury", 
        brand: "Mercedes", 
        year: 2018, 
        interior: ["sunroof", 2, "heated seats", "DRL"]
    }; 

    // Array
    const fruits = ["Pineapple", "Kiwi", "Strawberries", "Mango", "Grapes", "Pears"];

    const someFunction = () => (`A string from a function!`);

    return(
        <ComponentWithProps 
            numberProp={myVal} 
            booleanProp={bool} 
            strProp={str} 
            objProp={someObj}
            arrayProp={fruits}
            funcProp={someFunction}
            addingMyOwn="Text Sav wrote here!"
        /> 
    );
}

export default PropWithDifferentTypes; 