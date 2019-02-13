import React from 'react';
import { getUnits } from '../../helpers/units';

const IngredientInput = ({ index, ingredients, onChange }) => {
    return (
        <div>
            <label>
                Ingredients
            </label>
            <select name="ingredient" onChange={onChange} data-index={index}>
                <option>Select an ingredient</option>
                {ingredients.map(ingredient => {
                    return <option key={ingredient._id} value={ingredient._id}>{ingredient.name}</option>
                })}
            </select>

            <input type="number" name="amount" placeholder="Amount Number" onChange={onChange} data-index={index}/>
            <select name="amountUnit" onChange={onChange} data-index={index}>
                <option>Amount unit</option>
                {getUnits().map(unit => <option key={unit.abbreviation}>{unit.abbreviation}</option> )}
            </select>
        </div>
    )
}

export default IngredientInput;