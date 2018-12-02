import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import ingredientsReducer from './ingredientsReducer';

export default combineReducers ({
    recipesReducer,
    ingredientsReducer
})