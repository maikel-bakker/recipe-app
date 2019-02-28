import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RecipeSummary } from '../recipe/RecipeSummary';

const Day = styled.div`
    padding: 25px;
    height: 100%;
    background: white;
`;

const Select = styled.select`
    width: 100%;
`;

const ScheduleDay = ({ weekDay, recipes, currentRecipe, onChange }) => {
    return (
        <Day>
            <h2>{weekDay.dayAbbr}:</h2>
            {currentRecipe ? (
                <RecipeSummary recipe={currentRecipe} showSpecs={false} />
            ) : false}
            <Select name={weekDay.day.toLowerCase()} value={currentRecipe ? currentRecipe._id : ''} onChange={onChange}>
                <option>Select a recipe</option>
                {recipes.map(recipe => {
                    return <option key={recipe._id} value={recipe._id}>{recipe.title}</option>;
                })}
            </Select>
        </Day>
    );
};

ScheduleDay.propTypes = {
    weekDay: PropTypes.shape({
        day: PropTypes.string,
        dayAbbr: PropTypes.string
    }),
    recipes: PropTypes.array,
    currentRecipe: PropTypes.object,
    onChange: PropTypes.func
};

export default ScheduleDay;
