import Services from '../services';

export const fetchRecipes = () => {
    return (dispatch) => {
        Services.getRecipes()
        .then(data => {
            console.log(data);
            dispatch({
                type: 'FETCH_RECIPES_FULFILLED',
                payload: data
            })

        })
        .catch(error => {
            dispatch({
                type: 'FETCH_RECIPES_REJECTED',
                payload: error
            })
        });
    }
}