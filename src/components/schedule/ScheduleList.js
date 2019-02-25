import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const weeksInYear = 52;

class ScheduleList extends React.Component {
    currentWeek = moment().week();
    weeksInYear = weeksInYear;

    getWeeks() {
        let weeks = [];

        for (let index = this.currentWeek; index <= this.weeksInYear; index++) {
            weeks.push(index);
        }

        return weeks;
    }

    render() {

        return (
            <ol>
                {this.getWeeks().map((weekNumber, i) => {
                    return (
                        <li key={i}>
                            <Link to={`/schedule/${weekNumber}`}>
                                Week {weekNumber}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        );
    }
}

export default ScheduleList;
