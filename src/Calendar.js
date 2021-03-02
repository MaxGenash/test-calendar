import React, {useState} from "react";
import CalendarGrid from "./CalendarGrid";
import ModalCreateAppointment from "./ModalCreateAppointment";
import {getAppointmentId} from "./utils";

function Calendar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [savedAppointments, setSavedAppointments] = useState({});

    const closeModal = () => setIsModalOpen(false);
    const createAppointment = (date, time) => {
        setSelectedDate(date);
        setSelectedTime(time);
        setIsModalOpen(true);
    }
    const saveAppointment = (name) => {
        const appointmentId = getAppointmentId(selectedDate, selectedTime);
        setSavedAppointments({
            ...savedAppointments,
            [appointmentId]: { name }
        })
        closeModal();
    }

    return (
        <>
            <CalendarGrid savedAppointments={savedAppointments} createAppointment={createAppointment} />
            <ModalCreateAppointment
                isOpen={isModalOpen}
                onClose={closeModal}
                onSubmit={saveAppointment}
                appointmentDate={selectedDate}
                appointmentTime={selectedTime}
            />
        </>
    );
}

export default Calendar;

