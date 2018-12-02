import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <article id={recipe.id}>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <dl>
                <dt>Serves:</dt>
                <dd>{recipe.serves}</dd>

                <dt>Cook Time:</dt>
                <dd>{recipe.cookTime}</dd>
            </dl>
        </article>
    );
}

export default RecipeCard;