import { connect } from 'react-redux';

import { addIngredient } from '../../actions/ingredientActions';

import { AddIngredient } from './AddIngredient';

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredient => {
            dispatch(addIngredient(ingredient));
        }
    };
};

export const AddIngredientContainer = connect(null, mapDispatchToProps)(AddIngredient);
