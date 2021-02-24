
const Employee =  ({person}) => {
    return(
        <>
            <td>{person.employee_name}</td>
            <td>{person.employee_age}</td>
            <td>{person.employee_salary}</td>
        </>
    )
}

export default Employee; 