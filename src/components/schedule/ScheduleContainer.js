import { fetchRecipes } from '../../actions/recipesActions';
import { connect } from 'react-redux';
import { Schedule } from './Schedule';
import { fetchSchedule, addSchedule } from '../../actions/schedulesActions';

const mapStateToProps = state => {
    return {
        recipes: state.recipes.items,
        schedules: state.schedules.items,
        currentSchedule: state.schedules.currentSchedule
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: () => {
            dispatch(fetchRecipes());
        },

        fetchSchedule: weekNumber => {
            dispatch(fetchSchedule(weekNumber));
        },

        addSchedule: schedule => {
            dispatch(addSchedule(schedule));
        }
    };
};

const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule);

export default ScheduleContainer;
