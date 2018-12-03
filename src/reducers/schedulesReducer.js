const initialState = {
    schedules: [],
    currentSchedule: {},
    fetching: false,
    fetched: false,
    error: null
}

export default function schedules(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case "FETCH_SCHEDULE_PENDING": {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case "FETCH_SCHEDULE_REJECTED": {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }
        case "FETCH_SCHEDULE_FULFILLED": {            
            // console.log(newSchedule);
            let newSchedule = action.payload;

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                schedules: [...state.schedules, newSchedule],
                currentSchedule: newSchedule
            }

            return newState;
        }

        case "ADD_SCHEDULE_PENDING": {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case "ADD_SCHEDULE_REJECTED": {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }
        case "ADD_SCHEDULE_FULFILLED": {
            let newSchedule = action.payload;
            let newSchedules = state.schedules;
            let index = newSchedules.findIndex(({ weekNumber }) => weekNumber === newSchedule.weekNumber);

            if (index === -1) {
                console.log(true);
                
                newSchedules.push(newSchedule);
            } else {
                newSchedules[index] = newSchedule;
            }

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                schedules: newSchedules
            }

            return newState;
        }

        default: {
            return state;
        }
    }
}