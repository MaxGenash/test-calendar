import React from "react";
import { Table } from "react-bootstrap"
import { getAppointmentId, getDatesArr, getTimesArr } from "./utils";

function GridRow({ time, children }) {
    return (
        <tr>
            <td key={time + '_1_0'} className="calendar-grid__time-cell"> { time } </td>
            {children}
        </tr>
    );
}

function GridActionCell({ time, date, existingAppointment, onClick }) {
    return (
        <td onClick={onClick} className="calendar-grid__actions-cell" >
            {existingAppointment.name}
        </td>
    );
}

function CalendarGrid({ savedAppointments, createAppointment }) {
    const datesArr = getDatesArr();

    let rows = getTimesArr().map((time) => {
        const cells = datesArr.map(date => {
            const appointmentId = getAppointmentId(date, time);
            const existingAppointment = savedAppointments[appointmentId] || {};
            return (
                <GridActionCell
                    key={time + date}
                    time={time}
                    date={date}
                    existingAppointment={existingAppointment}
                    onClick={() => createAppointment(date, time)}
                />
            )
        });
        return (
            <GridRow key={time + '_1'} time={time}>
                {cells}
            </GridRow>
        );
    });

    const datesHeadlines = datesArr.map(date => (
        <th key={date} className="calendar-grid__th"> {date} </th>
    ));

    return (
        <Table responsive={true} bordered={true} hover={true} className="calendar-grid">
            <thead>
            <tr>
                <th className="calendar-grid__th">
                    time / date
                </th>
                {datesHeadlines}
            </tr>
            </thead>
            <tbody>
            { rows }
            </tbody>
        </Table>
    )
}

export default CalendarGrid;
