import { Card, CardBody, CardLink, CardSubtitle, CardTitle } from "reactstrap";
import DeleteGoal from "./DeleteGoal";
import EditGoal from "./EditGoal";

const IndividualGoal = ({ item , trigger}) => {

    return (
        <Card>
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtitle>{item.description}</CardSubtitle>
                <div className="float-right">
                    <DeleteGoal del={item._id} trigger={trigger}/>
                    <EditGoal item={item} trigger={trigger}/>
                </div>
            </CardBody>
        </Card>
    )
}
export default IndividualGoal; 