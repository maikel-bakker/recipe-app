
import IngredientService from '../services/ingredientService';

export const fetchIngredients = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_INGREDIENTS_PENDING'
        });

        IngredientService.getIngredients()
            .then(data => {
                dispatch({
                    type: 'FETCH_INGREDIENTS_FULFILLED',
                    payload: data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_INGREDIENTS_REJECTED',
                    payload: error
                });
            });
    };
};

export const addIngredient = ingredient => {
    return dispatch => {
        dispatch({
            type: 'ADD_INGREDIENT_PENDING'
        });

        IngredientService.addIngredient(ingredient)
            .then(data => {
                dispatch({
                    type: 'ADD_INGREDIENT_FULFILLED',
                    payload: data
                });
            })
            .catch(error => {
                dispatch({
                    type: 'ADD_INGREDIENT_REJECTED',
                    payload: error
                });
            });
    };
};
