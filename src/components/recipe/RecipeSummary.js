import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Summary = styled(Link)`
    display: block;
    /* padding: 25px; */
    text-decoration: none;
`;

const Article = styled.article`
    display: grid;
    height: 100%;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 18px;
`;

export const RecipeSummary = ({ recipe }) => {
    return (
        <Summary to={{ pathname: `/recipe/${recipe._id}`, state: { recipe: recipe } }}>
            <Article id={recipe._id}>
                <Title>{recipe.title}</Title>
            </Article>
        </Summary>
    );
};

RecipeSummary.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        serves: PropTypes.number,
        cookTime: PropTypes.cookTime
    })
};
