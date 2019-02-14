const initialState = {
    currentIngredientList: {},
    ingredientLists: [],
    fetching: false,
    fetched: false
}

export default function ingredientLists(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case "FETCH_INGREDIENTLIST_PENDING": {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case "FETCH_INGREDIENTLIST_REJECTED": {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }
        case "FETCH_INGREDIENTLIST_FULFILLED": {
            const foundIndex = state.ingredientLists.findIndex((ingredientList) => ingredientList._id === action.payload._id);
            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                currentIngredientList: action.payload
            }

            if (foundIndex === -1) {
                newState.ingredientLists = [...state.ingredientLists, action.payload];
            } else {
                state.ingredientLists[foundIndex] = action.payload;
                newState.ingredientLists = [...state.ingredientLists]
            }

            console.log(newState);
            

            return newState;
        }

        default: {
            return state;
        }
    }
}