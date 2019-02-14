import { connect } from 'react-redux';

import { fetchIngredientList } from '../../actions/ingredientListActions';

import { IngredientList } from './IngredientList';

const mapStateToProps = state => {
    return {
        ingredientLists: state.ingredientListReducer.ingredientLists,
        currentIngredientList: state.ingredientListReducer.currentIngredientList,
        fetching: state.ingredientListReducer.fetching,
        fetched: state.ingredientListReducer.fetched
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchIngredientList: (weekNumber) => {
            dispatch(fetchIngredientList(weekNumber));
        }
    }
};

export const IngredientListContainer = connect(mapStateToProps, mapDispatchToProps)(IngredientList);