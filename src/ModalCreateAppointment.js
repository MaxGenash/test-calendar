import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

function ModalCreateAppointment({
    appointmentDate,
    appointmentTime,
    isOpen,
    onClose,
    onSubmit,
}) {
    const [name, setName] = useState('');
    const saveChanges = () => {
        onSubmit(name);
        setName('');
    }

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p> It will happen {appointmentDate} at {appointmentTime}</p>
                <p>
                    <label>
                        <span> Appointment Name: {' '}</span>
                        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    </label>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCreateAppointment;
