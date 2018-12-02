const initialState = {
    recipes: [],
    fetching: false,
    fetched: false
}

const checkIfKeyExists = (key, arr) => {
    if (arr.length) {
        arr.forEach(el => {
            return (el._id === key);
        })
    } else {
        return true;   
    }

}

export default function recipes(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case "FETCH_RECIPES_PENDING": {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case "FETCH_RECIPES_REJECTED": {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }
        case "FETCH_RECIPES_FULFILLED": {

            let newRecipes = action.payload.filter(element => {
                return checkIfKeyExists(element._id, state.recipes);
            });

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                recipes: [...state.recipes, ...newRecipes]
            }

            return newState;
        }

        case "ADD_RECIPE_PENDING": {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case "ADD_RECIPE_REJECTED": {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }
        case "ADD_RECIPE_FULFILLED": {

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                recipes: [...state.recipes, action.payload]
            }

            return newState;
        }

        default: {
            return state;
        }
    }
}