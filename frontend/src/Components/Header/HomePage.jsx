import CreateGoal from "../SideBar/CreateGoal"
import {useState} from 'react'; 

const HomePage = () => {

    const [msg, setMsg] = useState('');
    
    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <CreateGoal trigger={trigger}/>
            </div>
            <div className="col-md-10">
                <div className="alert alert-success">{msg}</div>
            </div>
        </div>
    )
}
export default HomePage; 