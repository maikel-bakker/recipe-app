import IngredientListService from '../services/ingredientListService';

export const fetchIngredientList = weekNumber => {
    return dispatch => {
        dispatch({
            type: 'FETCH_INGREDIENTLIST_PENDING'
        });

        IngredientListService.getIngredientList(weekNumber)
            .then(data => {
                dispatch({
                    type: 'FETCH_INGREDIENTLIST_FULFILLED',
                    payload: data
                });

            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_INGREDIENTLIST_REJECTED',
                    payload: error
                });
            });
    };
};
