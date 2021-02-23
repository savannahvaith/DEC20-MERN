const SearchBar = (props) => {

    const {stateQuery, updateQuery, stateCheck, updateCheck} = props; 
    return(
        <>
            <label>Todo:</label>
            <input type="text" placeholder="Todo:" onChange={updateQuery} value={stateQuery}/>
            <label>Only show completed tasks:</label>
            <input type="checkbox" checked={stateCheck} onChange={updateCheck}/>
        </>
    )
}
export default SearchBar; 