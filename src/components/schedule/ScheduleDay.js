import React from 'react';

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

export default ScheduleDay;