import { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap"
import axios from "axios";
import {GOAL_URL} from '../CONSTS.json';

const CreateGoal = ({trigger}) => {

    // states for form
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const create = (e) => {
        e.preventDefault(); 
        axios.post(`${GOAL_URL}/create`, {title,description,date})
            .then((res) => {
                // console.log(res.data);
                clearValues();
                trigger(res.data);
            }).catch((err) => {
                trigger(err.data);
            })
    }

    const clearValues = () => {
        setTitle('');
        setDescription('');
        setDate('');
    }

    return(
        <div className="bg-light border-right" id="sidebar">
            <Card>
                <CardBody>
                    <CardTitle>Create New Goal</CardTitle>
                    <form onSubmit={create}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Title"
                            value={title}
                            onChange={({target}) => setTitle(target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            value={description}
                            onChange={({ target }) => setDescription(target.value)}
                        />
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Due Date"
                            value={date}
                            onChange={({ target }) => setDate(target.value)}
                        />
                        <button type="submit" className="btn btn-outline-success">Add</button>
                    </form>
                </CardBody>
            </Card>
        </div>     
    )
}

export default CreateGoal; 