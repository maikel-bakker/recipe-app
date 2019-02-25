import { retrieveItemPending, retrieveItemRejected } from '../helpers/defaultActionHandlers';
import { createReducer } from '../helpers/createReducer';

const initialState = {
    currentIngredientList: {},
    items: [],
    fetching: false,
    fetched: false
};

const findAndUpdateIngredientList = (state, action) => {
    const foundIndex = state.items.findIndex(ingredientList => ingredientList._id === action.payload._id);
    const newState = {
        ...state,
        fetching: false,
        fetched: true,
        currentIngredientList: action.payload
    };

    if (foundIndex === -1) {
        newState.items = [...state.items, action.payload];
    } else {
        state.items[foundIndex] = action.payload;
        newState.items = [...state.items];
    }

    return newState;
};

export const ingredientListReducer = createReducer(initialState, {
    FETCH_INGREDIENTLIST_PENDING: retrieveItemPending,
    FETCH_INGREDIENTLIST_REJECTED: retrieveItemRejected,
    FETCH_INGREDIENTLIST_FULFILLED: findAndUpdateIngredientList
});
