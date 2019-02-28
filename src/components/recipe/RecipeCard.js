import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { RecipeSpecs } from './RecipeSpecs';

const Card = styled(Link)`
    display: block;
    height: 100%;
    padding: 25px;
    text-decoration: none;
    background: white;
    color: black;
    ${({ offset }) => offset ? 'transform: translateY(20px)' : ''};
`;

const Article = styled.article`
    display: grid;
    height: 100%;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 2vw;
`;

const Description = styled.p`
    /* font-size: 16px; */
`;

const RecipeCard = ({ recipe, offset, showSpecs = true }) => {
    return (
        <Card to={{ pathname: `/recipe/${recipe._id}`, state: { recipe: recipe } }} offset={offset}>
            <Article id={recipe._id}>
                <Title>{recipe.title}</Title>
                <Description>{recipe.description}</Description>
                {showSpecs ? (
                    <RecipeSpecs serves={recipe.serves} cookTime={recipe.cookTime} size={'small'} />
                ) : false}
            </Article>
        </Card>
    );
};

export default RecipeCard;

RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        serves: PropTypes.number,
        cookTime: PropTypes.cookTime
    }),
    offset: PropTypes.bool,
    showSpecs: PropTypes.bool
};
