import { createReducer } from '../helpers/createReducer';
import { retrieveItemPending, retrieveItemRejected, addItemFulfilled, updateWithNewItems } from '../helpers/defaultActionHandlers';

const initialState = {
    items: [],
    fetching: false,
    fetched: false
};

export const ingredientsReducer = createReducer(initialState, {
    FETCH_INGREDIENTS_PENDING: retrieveItemPending,
    FETCH_INGREDIENTS_REJECTED: retrieveItemRejected,
    FETCH_INGREDIENTS_FULFILLED: updateWithNewItems,
    ADD_INGREDIENT_PENDING: retrieveItemPending,
    ADD_INGREDIENT_REJECTED: retrieveItemRejected,
    ADD_INGREDIENT_FULFILLED: addItemFulfilled
});
