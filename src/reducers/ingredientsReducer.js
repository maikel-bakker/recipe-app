import { checkIfKeyExists } from '../helpers/checkIfKeyExists';

const initialState = {
    ingredients: [],
    fetching: false,
    fetched: false
};

export const ingredientsReducer = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case 'FETCH_INGREDIENTS_PENDING': {
            return {
                ...state,
                fetching: true,
                fetched: false
            };
        }

        case 'FETCH_INGREDIENTS_REJECTED': {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            };
        }

        case 'FETCH_INGREDIENTS_FULFILLED': {

            let newIngredients = action.payload.filter(element => {
                return checkIfKeyExists(element._id, state.ingredients);
            });

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                ingredients: [...state.ingredients, ...newIngredients]
            };

            return newState;
        }

        case 'ADD_INGREDIENT_PENDING': {
            return {
                ...state,
                fetching: true,
                fetched: false
            };
        }

        case 'ADD_INGREDIENT_REJECTED': {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            };
        }

        case 'ADD_INGREDIENT_FULFILLED': {

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                ingredients: [...state.ingredients, action.payload]
            };

            return newState;
        }

        default: {
            return state;
        }
    }
};
