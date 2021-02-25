import axios from 'axios';
import { useState } from 'react';
import { CardLink, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { GOAL_URL } from './CONSTS.json';
const EditGoal = ({ item, trigger }) => {

    // Data from DB
    const { title, description, due } = item;
    const [updateTitle, setUTitle] = useState(title);
    const [updateDescription, setUDescirption] = useState(description);
    const [updateD8, setUD8] = useState(due);

    // Modal
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    // function to updateDB
    const updateDatabase = (e) => {
        e.preventDefault();
        axios.patch(`${GOAL_URL}/update/${item._id}`,
            { title: updateTitle, description: updateDescription, due: updateD8 })
            .then((res) => {
                trigger(res.data);
                toggle();
            })
            .catch((err)=>{
                trigger(err.data);
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-warning" onClick={toggle}>EDIT </CardLink>
            <Modal isOpen={showModal}>
                <ModalHeader>{item.title}</ModalHeader>
                <form onSubmit={updateDatabase}>
                    <ModalBody>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={updateTitle}
                            onChange={({ target }) => setUTitle(target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            value={updateDescription}
                            onChange={({ target }) => setUDescirption(target.value)}
                        />
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Due Date"
                            value={updateD8}
                            onChange={({ target }) => setUD8(target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={toggle} className="btn btn-outline-danger">Cancel</button>
                        <button type="submit" className="btn btn-outline-success">Update</button>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    );
}
export default EditGoal; 