import React from "react";

import { Table } from "react-bootstrap"
import { getDatesArr, getTimesArr } from "./utils";

function GridRow({ time, children }) {
    return (
        <tr key={time + '_1'}>
            <td key={time + '_1_0'} className="calendar-grid__time-cell"> { time } </td>
            {children}
        </tr>
    );
}

function GridActionCell({ time, date, onClick }) {
    return (
        <td key={time + date} onClick={onClick} className="calendar-grid__actions-cell" />
    );
}

function CalendarGrid({ createAppointment }) {
    const datesArr = getDatesArr();

    let rows = getTimesArr().map((time) => {
        const cells = datesArr.map(date => (
            <GridActionCell time={time} date={date} onClick={() => createAppointment(date, time)}/>
        ));
        return (
            <GridRow time={time}>
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
