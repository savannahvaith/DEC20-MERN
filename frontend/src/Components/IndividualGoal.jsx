import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import DeleteGoal from "./DeleteGoal";
import EditGoal from "./EditGoal";

const IndividualGoal = ({ item , trigger}) => {

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h3">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted">{item.description}</CardSubtitle>
                <div className="float-right">
                    <DeleteGoal del={item._id} trigger={trigger}/>
                    <EditGoal item={item} trigger={trigger}/>
                </div>
            </CardBody>
        </Card>
    )
}
export default IndividualGoal; 