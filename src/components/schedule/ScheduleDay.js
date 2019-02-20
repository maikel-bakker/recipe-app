import React from 'react';
import PropTypes from "prop-types";

const ScheduleDay = ({ day, recipes, value, onChange }) => {    
    return (
        <div>
            <h2>{day}:</h2>
            <select name={day.toLowerCase()} value={value} onChange={onChange}>
                <option>Select a recipe</option>
                {recipes.map(recipe=> {
                    return <option key={recipe._id} value={recipe._id}>{recipe.title}</option>
                })}
            </select>
        </div>
    )
}

ScheduleDay.propTypes = {
    day: PropTypes.string,
    recipes: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default ScheduleDay;