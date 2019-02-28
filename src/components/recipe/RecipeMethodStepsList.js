import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from '../../style-variables/fonts';

const MethodStepsList = styled.ol`
    max-width: 700px;
    list-style: none;
    counter-reset: method-steps;
    font-size: 20px;
    line-height: 1.5;
`;

const MethodStep = styled.li`
    display: flex;
    counter-increment: method-steps;
    margin: 2em 0;

    &:before {
        ${Heading}
        content: counter(method-steps)".";
        margin-right: 10px;
        font-size: 32px;
        line-height: 0.75em;
    }
`;

export const RecipeMethodStepsList = ({ steps }) => (
    <MethodStepsList>
        {steps.map((step, i) => {
            return <MethodStep key={i}>{step}</MethodStep>;
        })}
    </MethodStepsList>
);

RecipeMethodStepsList.propTypes = {
    steps: PropTypes.array
};
