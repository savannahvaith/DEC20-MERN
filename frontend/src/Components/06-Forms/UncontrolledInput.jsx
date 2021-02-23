'use strict';
const UncontrolledInput = () => {
    return (
        <form>
            <label>Name:</label>
            {/* value?  */}
            <input id="username" type="text" name="username" /> 
            <button type="submit">Submit</button>
        </form>
    );
}
export default UncontrolledInput; 