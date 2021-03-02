export function getTimesArr() {
    return new Array(48).fill(0).map((_, i) => {
        const hours = Math.floor(i/2);
        const minutes = i % 2 === 0 ? `00` : `30`;
        return `${hours}:${minutes}`;
    });
}

export function getDatesArr() {
    return [
        'Mon 1',
        'Tue 2',
        'Wed 3',
        'Thu 4',
        'Fri 5',
        'Sat 6',
        'Sun 7',
    ];
}

export function getAppointmentId(date, time) {
    return `${date}_${time}`;
}
