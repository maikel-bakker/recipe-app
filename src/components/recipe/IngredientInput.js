import React from 'react';
import PropTypes from 'prop-types';

import { getUnits } from '../../helpers/units';
import { AddIngredientContainer } from './AddIngredientContainer';

const IngredientInput = ({ index, ingredients, onChange, showAddIngredient }) => {

    return (
        <div>
            <label>
                Ingredients
            </label>
            <div style={{ display: 'inline-block' }}>
                <select name="ingredient" onChange={onChange} data-index={index}>
                    <option>Select an ingredient</option>
                    {ingredients.map(ingredient => {
                        return <option key={ingredient._id} value={ingredient._id}>{ingredient.name}</option>;
                    })}
                    <option value="new">New ingredient</option>
                </select>
                <AddIngredientContainer show={showAddIngredient} />
            </div>

            <input type="number" name="amount" placeholder="Amount Number" onChange={onChange} data-index={index}/>

            <select name="amountUnit" onChange={onChange} data-index={index}>
                <option>Amount unit</option>
                {getUnits().map(unit => <option key={unit.abbreviation}>{unit.abbreviation}</option>)}
            </select>
        </div>
    );
};

export default IngredientInput;

IngredientInput.propTypes = {
    index: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string
    })),
    onChange: PropTypes.func,
    showAddIngredient: PropTypes.bool
};
