import { filterNewItems } from './filterNewItems';

export const retrieveItemPending = state => {
    return {
        ...state,
        fetching: true,
        fetched: false
    };
};

export const retrieveItemRejected = (state, action) => {
    return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
    };
};

export const updateWithNewItems = (state, action) => {
    return {
        ...state,
        fetching: false,
        fetched: true,
        items: [...state.items, ...filterNewItems(state.items, action.payload)]
    };
};

export const addItemFulfilled = (state, action) => {
    return {
        ...state,
        fetching: false,
        fetched: true,
        items: [...state.items, action.payload]
    };
};
