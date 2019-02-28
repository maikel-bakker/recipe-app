import { filterNewItems } from './filterNewItems';
import { updateOrReplaceInArray } from './updateOrReplaceInArray';

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

export const updateWithNewItem = (state, action) => {
    return {
        ...state,
        fetching: false,
        fetched: true,
        items: updateOrReplaceInArray(state.items, action.payload, '_id')
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
