import { createReducer } from '../helpers/createReducer';
import { retrieveItemPending, retrieveItemRejected } from '../helpers/defaultActionHandlers';
import { updateOrReplaceInArray } from '../helpers/updateOrReplaceInArray';

const initialState = {
    items: [],
    currentSchedule: {},
    fetching: false,
    fetched: false,
    error: null
};

const addOrUpdateSchedule = (state, action) => {
    let newSchedule = action.payload;
    let newSchedules = state.items;
    let index = newSchedules.findIndex(({ weekNumber }) => weekNumber === newSchedule.weekNumber);

    if (index === -1) {
        newSchedules.push(newSchedule);
    } else {
        newSchedules[index] = newSchedule;
    }

    return {
        ...state,
        fetching: false,
        fetched: true,
        items: newSchedules
    };
};

const updateWithNewSchedule = (state, action) => {
    return {
        ...state,
        fetching: false,
        fetched: true,
        items: updateOrReplaceInArray(state.items, action.payload, '_id'),
        currentSchedule: action.payload
    };
};

export const schedulesReducer = createReducer(initialState, {
    FETCH_SCHEDULE_PENDING: retrieveItemPending,
    FETCH_SCHEDULE_REJECTED: retrieveItemRejected,
    FETCH_SCHEDULE_FULFILLED: updateWithNewSchedule,
    ADD_SCHEDULE_PENDING: retrieveItemPending,
    ADD_SCHEDULE_REJECTED: retrieveItemRejected,
    ADD_SCHEDULE_FULFILLED: addOrUpdateSchedule
});
