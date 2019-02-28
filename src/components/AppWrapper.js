import React from 'react';
import PropTypes from 'prop-types';

export const AppWrapper = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

AppWrapper.propTypes = {
    children: PropTypes.node
};
