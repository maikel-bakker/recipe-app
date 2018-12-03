import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import ingredientsReducer from './ingredientsReducer';
import schedulesReducer from './schedulesReducer';

export default combineReducers ({
    recipesReducer,
    ingredientsReducer,
    schedulesReducer
})