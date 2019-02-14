import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import ingredientsReducer from './ingredientsReducer';
import schedulesReducer from './schedulesReducer';
import ingredientListReducer from './ingredientListReducer';

export default combineReducers ({
    recipesReducer,
    ingredientsReducer,
    schedulesReducer,
    ingredientListReducer
})