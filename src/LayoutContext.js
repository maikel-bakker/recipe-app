import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const LayoutContext = React.createContext();

export class LayoutContextProvider extends Component {
    navWidth = {
        default: '250px',
        expanded: '50vw'
    }

    state = {
        navExpanded: true
    }

    navExpand() {
        this.setState({ navExpanded: true });
    }

    navCollapse() {
        this.setState({ navExpanded: false });
    }

    render() {
        return (
            <LayoutContext.Provider value={{
                state: this.state,
                navWidth: this.navWidth,
                navCollapse: this.navCollapse.bind(this),
                navExpand: this.navExpand.bind(this)
            }}>
                {this.props.children}
            </LayoutContext.Provider>
        );
    }
}

LayoutContextProvider.propTypes = {
    children: PropTypes.node
};

export const LayoutContextConsumer = LayoutContext.Consumer;
