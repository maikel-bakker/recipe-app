import React from 'react';

const IngredientInput = ({ index, name, ingredients, onChange, amountOnChange }) => {
    return (
        <div>
            <label>
                Ingredients
            </label>
            <select name={name} onChange={onChange} data-index={index}>
                <option>Select an ingredient</option>
                {ingredients.map(ingredient => {
                    return <option key={ingredient._id} value={ingredient._id}>{ingredient.name}</option>
                })}
            </select>

            <input type="text" placeholder="Amount" onChange={amountOnChange} data-index={index}/>
        </div>
    )
}

export default IngredientInput;