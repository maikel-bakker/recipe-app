import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={{ pathname: `/recipe/${recipe._id}`, state: { recipe: recipe } }}>
            <article id={recipe._id}>
                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
                <dl>
                    <dt>Serves:</dt>
                    <dd>{recipe.serves}</dd>

                    <dt>Cook Time:</dt>
                    <dd>{recipe.cookTime}</dd>
                </dl>
            </article>
        </Link>
    );
};

export default RecipeCard;

RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        serves: PropTypes.number,
        cookTime: PropTypes.cookTime
    })
};
