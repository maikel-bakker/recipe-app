import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetail = ({ location }) => {
    const recipe = location.state.recipe;
    
    return (
        <article>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <dl>
                <dt>Serves:</dt>
                <dd>{recipe.serves}</dd>

                <dt>Cook Time:</dt>
                <dd>{recipe.cookTime}</dd>
            </dl>
            <div>
                Ingredients
                <ul>
                    {recipe.ingredientAmounts.map(ingredientAmount => {
                        return <li key={ingredientAmount._id}>{ingredientAmount.ingredient.name} : {ingredientAmount.amount} {ingredientAmount.amountUnit}</li>
                    })}
                </ul>
            </div>
            <div>
                Steps
                <ol>
                    {recipe.steps.map((step, i) => {
                        return <li key={i}>{step}</li>
                    })}
                </ol>
            </div>
        </article>
    );
}

RecipeDetail.propTypes = {
    location: PropTypes.object
}

export default RecipeDetail;