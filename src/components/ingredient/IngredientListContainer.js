import { connect } from 'react-redux';

import { fetchIngredientList } from '../../actions/ingredientListActions';

import { IngredientList } from './IngredientList';

const mapStateToProps = state => {
    return {
        ingredientLists: state.ingredientLists.items,
        currentIngredientList: state.ingredientLists.currentIngredientList,
        fetching: state.ingredientLists.fetching,
        fetched: state.ingredientLists.fetched
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchIngredientList: weekNumber => {
            dispatch(fetchIngredientList(weekNumber));
        }
    };
};

export const IngredientListContainer = connect(mapStateToProps, mapDispatchToProps)(IngredientList);
