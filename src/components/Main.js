import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Routes } from './Routes';
import { LayoutContextConsumer } from '../LayoutContext';

const StyledMain = styled.main`
    height: 100%;
    margin-left: ${({ layout }) => layout.state.navExpanded ? `${layout.navWidth.expanded}` : `${layout.navWidth.default}`};
`;

export const Main = () => {
    return (
        <LayoutContextConsumer>
            {context => (
                <StyledMain layout={context}>
                    <Routes/>
                </StyledMain>
            )}
        </LayoutContextConsumer>
    );
};

Main.propTypes = {
    children: PropTypes.node
};
