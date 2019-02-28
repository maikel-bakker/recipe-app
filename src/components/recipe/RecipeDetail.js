import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from '../../style-variables/fonts';
import { RecipeMethodStepsList } from './RecipeMethodStepsList';
import { RecipeSpecs } from './RecipeSpecs';

const Wrapper = styled.article`
    display: flex;
    min-height: 100%;
`;

const Panel = styled.section`
    flex-basis: 50%;
`;

const Info = styled(Panel)`
    flex-shrink: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 620px;
    padding: 80px;
`;

const Method = styled(Panel)`
    flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 25px;
    border-left: 2px dashed black;
    background: white;
`;

const InfoInner = styled.div`
    display: inline-block;
`;

const Title = styled.h1`
    margin: 0;
    ${Heading}
    font-size: 80px;
    line-height: 1;
`;

const Description = styled.p`
    font-size: 20px;
`;

const IngredientsTitle = styled.h2`
    ${Heading}
    margin: 1.25em 0 15px;
    font-size: 32px;
`;

const Ingredients = styled.ul`
    list-style: none;
    font-size: 18px;
    padding: 0;
`;

const IngredientsItem = styled.li`
    padding: 15px 0;
    border-top: 1px dotted black;

    &:last-child {
        border-bottom: 1px dotted black;
    }
`;

const RecipeDetail = ({ location }) => {
    const recipe = location.state.recipe;

    console.log(recipe);


    return (
        <Wrapper>
            <Info>
                <InfoInner>
                    <Title>{recipe.title}</Title>
                    <Description>{recipe.description}</Description>
                    <RecipeSpecs serves={recipe.serves} cookTime={recipe.cookTime} />
                    <IngredientsTitle>Ingredients</IngredientsTitle>
                    <Ingredients>
                        {recipe.ingredientAmounts.map(ingredientAmount => {
                            return (
                                <IngredientsItem key={ingredientAmount._id}>
                                    {ingredientAmount.ingredient.name}: {ingredientAmount.amount} {ingredientAmount.amountUnit}
                                </IngredientsItem>
                            );
                        })}
                    </Ingredients>
                </InfoInner>
            </Info>
            <Method>
                <RecipeMethodStepsList steps={recipe.steps} />
            </Method>
        </Wrapper>
    );
};

RecipeDetail.propTypes = {
    location: PropTypes.object
};

export default RecipeDetail;
