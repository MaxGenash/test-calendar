import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap"
import CalendarGrid from "./CalendarGrid";
import FormCreateAppointment from "./FormCreateAppointment";

function Calendar() {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const closeModal = () => setShow(false);
    const createAppointment = (date, time) => {
        setSelectedDate(date);
        setSelectedTime(time);
        setShow(true);
    }

    return (
        <>
            <CalendarGrid createAppointment={createAppointment} />
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormCreateAppointment date={selectedDate} time={selectedTime} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Calendar;

