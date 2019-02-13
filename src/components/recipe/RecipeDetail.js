import React from 'react';

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
                        return <li>{ingredientAmount.ingredient.name} : {ingredientAmount.amount} {ingredientAmount.amountUnit}</li>
                    })}
                </ul>
            </div>
            <div>
                Steps
                <ol>
                    {recipe.steps.map(step => {
                        return <li>{step}</li>
                    })}
                </ol>
            </div>
        </article>
    );
}

export default RecipeDetail;