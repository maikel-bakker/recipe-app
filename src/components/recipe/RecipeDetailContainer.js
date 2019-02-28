import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from './RecipeDetail';
import { LayoutContext } from '../../LayoutContext';

export class RecipeDetailContainer extends Component {
    componentDidMount() {
        this.context.navCollapse();
    }

    render() {
        return (
            <RecipeDetail location={this.props.location}/>
        );
    }
}

RecipeDetailContainer.propTypes = {
    location: PropTypes.object
};

RecipeDetailContainer.contextType = LayoutContext;
