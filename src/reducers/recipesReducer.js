import { createReducer } from '../helpers/createReducer';
import { retrieveItemPending, retrieveItemRejected, addItemFulfilled, updateWithNewItems } from '../helpers/defaultActionHandlers';

const initialState = {
    items: [],
    fetching: false,
    fetched: false
};

export const recipesReducer = createReducer(initialState, {
    FETCH_RECIPES_PENDING: retrieveItemPending,
    FETCH_RECIPES_REJECTED: retrieveItemRejected,
    FETCH_RECIPES_FULFILLED: updateWithNewItems,
    ADD_RECIPE_PENDING: retrieveItemPending,
    ADD_RECIPE_REJECTED: retrieveItemRejected,
    ADD_RECIPE_FULFILLED: addItemFulfilled
});
