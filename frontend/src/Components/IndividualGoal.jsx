import { Card, CardBody, CardSubtitle, CardTitle, Toast, ToastBody, ToastHeader } from "reactstrap";
import DeleteGoal from "./DeleteGoal";
import EditGoal from "./EditGoal";

const IndividualGoal = ({ item, trigger }) => {

    return (
        // <Card>
        <div className="p-6 my-2 rounded">
            <Toast>
                <ToastHeader>{item.title}
                </ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    {item.description}
                    <hr />
                    <DeleteGoal className="float-right" del={item._id} trigger={trigger} />
                    <EditGoal className="float-right" item={item} trigger={trigger} />

                </ToastBody>
            </Toast>
        </div>

    )
}
export default IndividualGoal; 