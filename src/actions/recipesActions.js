import RecipeService from '../services/recipeService';

export const fetchRecipes = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_RECIPES_PENDING'
        });

        RecipeService.getRecipes()
        .then(data => {
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

export const addRecipe = (recipe) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_RECIPE_PENDING'
        });

        RecipeService.addRecipe(recipe)
        .then(data => {
            console.log(data);
            dispatch({
                type: 'ADD_RECIPE_FULFILLED',
                payload: data
            })

        })
        .catch(error => {
            dispatch({
                type: 'ADD_RECIPE_REJECTED',
                payload: error
            })
        });
    }
}