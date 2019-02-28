import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from '../../style-variables/fonts';

const Specs = styled.dl`
    align-self: flex-end;
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 0;
`;

const SpecsTitle = styled.dt`
    font-family: 'Quicksand', sans-serif;
    grid-row-start: 1;
    font-weight: 500;
`;

const SpecsValue = styled.dd`
    ${Heading}
    font-size: ${({ size }) => size === 'small' ? '30px' : '40px'};
    line-height: 1;
    margin: 0;
`;

const SpecsUnit = styled.span`
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
`;

export const RecipeSpecs = ({ serves, cookTime, size = 'big' }) => (
    <Specs>
        <SpecsTitle>Serves:</SpecsTitle>
        <SpecsValue size={size}>{serves}</SpecsValue>

        <SpecsTitle>Cook Time:</SpecsTitle>
        <SpecsValue size={size}>{cookTime} <SpecsUnit>hrs</SpecsUnit></SpecsValue>
    </Specs>
);

RecipeSpecs.propTypes = {
    serves: PropTypes.number,
    cookTime: PropTypes.number,
    size: PropTypes.string
};
