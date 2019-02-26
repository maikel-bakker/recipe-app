import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { merge } from 'lodash';

import scheduleService from '../../services/scheduleService';
import ScheduleDay from './ScheduleDay';

export class Schedule extends React.Component {
    state = {
        currentSchedule: {
            weekDays: [
                { day: 'monday' },
                { day: 'tuesday' },
                { day: 'wednesday' },
                { day: 'thursday' },
                { day: 'friday' },
                { day: 'saturday' },
                { day: 'sunday' }
            ]
        }
    }

    constructor(props) {
        super();
        this.state.currentSchedule.weekNumber = props.match.params.weekNumber;
    }

    componentDidMount() {
        // Prevent unnecessary fetch if recipes are already fetched in other component
        if (!this.props.recipes.length) { this.props.fetchRecipes(); }

        // TODO: use redux action with promise
        scheduleService.getSchedule(this.props.match.params.weekNumber)
            .then(schedule => {
                this.setState({
                    currentSchedule: schedule
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    handleRecipeChange(event) {
        const newWeekDays = this.state.currentSchedule.weekDays.map(weekDay => {
            if (weekDay.day === event.target.name) {
                weekDay.recipe = event.target.value;
            }

            return weekDay;
        });

        this.setState(prevState => ({
            currentSchedule: merge(prevState.currentSchedule, { currentSchedule: { weekDays: newWeekDays } })
        }));
    }

    saveSchedule(event) {
        event.preventDefault();
        this.props.addSchedule(this.state.currentSchedule);
    }

    render() {
        return (
            <div>
                <h1>Schedule for week {this.state.currentSchedule.weekNumber}</h1>

                {this.state.currentSchedule.weekDays.map((weekDay, i) => {
                    return (
                        <ScheduleDay
                            key={i}
                            day={weekDay.day}
                            recipes={this.props.recipes}
                            value={weekDay.recipe ? weekDay.recipe._id : ''}
                            onChange={this.handleRecipeChange.bind(this)} />
                    );
                })}

                <button onClick={this.saveSchedule.bind(this)}>Save schedule</button>

                <Link to={{ pathname: `/ingredient-list/${this.state.currentSchedule.weekNumber}` }}>
                    Get ingredient list
                </Link>
            </div>
        );

    }
}

Schedule.propTypes = {
    match: PropTypes.object,
    recipes: PropTypes.array,
    fetchRecipes: PropTypes.func,
    addSchedule: PropTypes.func
};
