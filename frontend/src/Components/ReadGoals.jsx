import axios from 'axios';
import { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { GOAL_URL } from './CONSTS.json';
import IndividualGoal from './IndividualGoal';
const ReadGoals = ({ msg , trigger}) => {

    // states
    const [goalList, setGoalList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    // useEffect -> triggers a sideEffect
    useEffect(() => {
        axios.get(`${GOAL_URL}/getAll`)
            .then((res) => {
                setIsLoaded(true);
                setGoalList(res.data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err.message);
            })
    }, [msg]);

    if (error) {
        return <p>{error}</p>
    } else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    } else {
        return (
            <div className="row">
                {goalList.map((item) => (
                    <div className="col-md-6">
                        <IndividualGoal key={item._id} item={item} trigger={trigger} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ReadGoals;