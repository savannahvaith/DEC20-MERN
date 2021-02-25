import CreateGoal from "../SideBar/CreateGoal"
import { useState } from 'react';
import ReadGoals from "../ReadGoals";

const HomePage = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <CreateGoal trigger={trigger} />
            </div>
            <div className="container">
                <div className="col-md-10">
                    <div className="alert alert-success">{msg}</div>
                    <ReadGoals msg={msg} trigger={trigger}/>
                </div>
            </div>
        </div>
    )
}
export default HomePage; 