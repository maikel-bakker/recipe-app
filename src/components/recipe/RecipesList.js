import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RecipeCard from './RecipeCard';
import { LayoutContext } from '../../LayoutContext';
import { Heading } from '../../style-variables/fonts';

const columnCount = 3;

const Wrapper = styled.section`
    position: absolute;
    left: 29%;
    right: 0;
    padding-right: 5%;
    width: 71%;
`;

const Title = styled.h1`
    ${Heading}
    font-size: 5vw;
    text-align: center;
    color: #f76e6e;
`;

const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(${columnCount}, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    padding: 0;
    list-style: none;
`;

const Item = styled.li`

`;

class RecipesList extends React.Component {

    componentDidMount() {
        this.context.navExpand();
        this.props.fetchRecipes();
    }

    render() {
        return (
            <Wrapper>
                <Title>Latest Recipes</Title>
                <Grid>
                    {this.props.recipes.map((recipe, i) => {
                        if (recipe) {
                            return (
                                <Item key={recipe._id}>
                                    <RecipeCard recipe={recipe} offset={i % columnCount === 1} />
                                </Item>
                            );
                        }

                        return false;
                    })}
                </Grid>
            </Wrapper>
        );
    }
}

export default RecipesList;

RecipesList.contextType = LayoutContext;

RecipesList.propTypes = {
    fetchRecipes: PropTypes.func,
    recipes: PropTypes.arrayOf(PropTypes.object)
};
