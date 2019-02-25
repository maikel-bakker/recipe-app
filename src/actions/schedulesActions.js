import ScheduleService from '../services/scheduleService';

export const fetchSchedule = weekNumber => {
    return dispatch => {
        dispatch({
            type: 'FETCH_SCHEDULE_PENDING'
        });

        ScheduleService.getSchedule(weekNumber)
            .then(data => {
                dispatch({
                    type: 'FETCH_SCHEDULE_FULFILLED',
                    payload: data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_SCHEDULE_REJECTED',
                    payload: error
                });
            });
    };
};

export const addSchedule = schedule => {
    return dispatch => {
        dispatch({
            type: 'ADD_SCHEDULE_PENDING'
        });

        ScheduleService.addSchedule(schedule)
            .then(data => {
                dispatch({
                    type: 'ADD_SCHEDULE_FULFILLED',
                    payload: data
                });

            })
            .catch(error => {
                dispatch({
                    type: 'ADD_SCHEDULE_REJECTED',
                    payload: error
                });
            });
    };
};
