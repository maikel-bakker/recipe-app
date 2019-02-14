import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <React.Fragment>
            <Link to="/">Recipes</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/add-recipe-form">Form</Link>
        </React.Fragment>
    )
}