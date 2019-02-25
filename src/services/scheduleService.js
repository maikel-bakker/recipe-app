class ScheduleService {
    async getSchedule(weekNumber) {
        let res = await fetch(`http://localhost:4000/get-schedule/'${weekNumber}`);

        if (res.ok) {
            return await res.json();
        }
        throw new Error(res.statusText);
    }

    async addSchedule(schedule) {
        let res = await fetch('http://localhost:4000/add-schedule', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(schedule)

        });

        if (res.ok) {
            return await res.json();
        }

        throw new Error(res.statusText);
    }
}

export default new ScheduleService();
