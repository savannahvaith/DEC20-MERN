const List = ({ list, check, query }) => {

    const completed = (check) => (list) => list.completed === check; 

    // function completed(check){
        // return function(list){
            // list.completed === check; 
        // }
    // }

    // query
    const byQuery = (query) => (list) => list.title.toLowerCase().includes(query.toLowerCase());

    let filteredList= []; 

    if(check){
        filteredList = list.filter(completed(check)).filter(byQuery(query));
    }else{
        filteredList = list.filter(byQuery(query));
    }


    return (
        <>
            {filteredList.map((item) => (
                <div>
                    <h2>{item.title}</h2>
                    {item.completed ? <p style={{ textDecoration: "line-through" }}>Completed</p> : <p>Completed</p>}
                </div>
            ))}
        </>
    )
}
export default List; 