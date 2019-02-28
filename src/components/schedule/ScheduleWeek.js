import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScheduleDay from './ScheduleDay';

const Wrapper = styled.section`
    padding: 50px;
`;

const List = styled.ol`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 2px;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const ScheduleWeek = ({ currentSchedule, recipes, onChange, saveSchedule }) => {
    if (currentSchedule.weekNumber) {
        return <Wrapper>
            <h1>Schedule for week {currentSchedule.weekNumber}</h1>
            <List>
                {currentSchedule.weekDays.map((weekDay, i) => {
                    return (
                        <li key={i}>
                            <ScheduleDay
                                weekDay={weekDay}
                                recipes={recipes}
                                currentRecipe={weekDay.recipe ? weekDay.recipe : null}
                                onChange={onChange} />
                        </li>
                    );
                })}

            </List>
            <button onClick={saveSchedule}>Save schedule</button>

            <Link to={{ pathname: `/ingredient-list/${currentSchedule.weekNumber}` }}>
                Get ingredient list
            </Link>
        </Wrapper>;
    }

    return <div>Loading...</div>;
};

ScheduleWeek.propTypes = {
    currentSchedule: PropTypes.object,
    recipes: PropTypes.array,
    onChange: PropTypes.func,
    saveSchedule: PropTypes.func
};
