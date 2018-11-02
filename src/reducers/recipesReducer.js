const initialState = {
    recipes: [],
    fetching: false,
    fetched: false
}

export default function recipes(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case "FETCH_RECIPES": {
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
            
            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                recipes: [...state.recipes, ...action.payload]
            }
            
            return newState;
        }
        default: {
            return state;
        }
    }
}