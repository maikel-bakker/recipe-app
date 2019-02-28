import React from 'react';
import PropTypes from 'prop-types';
import { merge } from 'lodash';

// import scheduleService from '../../services/scheduleService';
import { ScheduleWeek } from './ScheduleWeek';
import { LayoutContext } from '../../LayoutContext';

export class Schedule extends React.Component {
    state = {
        currentSchedule: {
            weekDays: [
                { day: 'monday', dayAbbr: 'mon' },
                { day: 'tuesday', dayAbbr: 'tue' },
                { day: 'wednesday', dayAbbr: 'wed' },
                { day: 'thursday', dayAbbr: 'thu' },
                { day: 'friday', dayAbbr: 'fri' },
                { day: 'saturday', dayAbbr: 'sat' },
                { day: 'sunday', dayAbbr: 'sun' }
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

        this.context.navCollapse();

        this.props.fetchSchedule(this.props.match.params.weekNumber);
    }

    componentDidUpdate() {
        if (this.props.currentSchedule._id !== this.state.currentSchedule._id) {
            console.log('TEST');

            this.setState({
                currentSchedule: merge(this.props.currentSchedule, this.state.currentSchedule)
            });

        }
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
            <ScheduleWeek
                currentSchedule={this.state.currentSchedule}
                recipes={this.props.recipes}
                onChange={this.handleRecipeChange.bind(this)}
                saveSchedule={this.saveSchedule.bind(this)} />
        );

    }
}

Schedule.contextType = LayoutContext;

Schedule.propTypes = {
    match: PropTypes.object,
    recipes: PropTypes.array,
    fetchRecipes: PropTypes.func,
    addSchedule: PropTypes.func,
    fetchSchedule: PropTypes.func,
    schedules: PropTypes.array,
    currentSchedule: PropTypes.object
};
