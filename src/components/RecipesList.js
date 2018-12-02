import React from 'react';
import RecipeCard from './RecipeCard';

class RecipesList extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        return (
            <ul>
                {this.props.recipes.map((recipe) => {
                    if (recipe) {
                        return ( 
                            <li key={recipe._id}>
                                <RecipeCard recipe={recipe} />
                            </li>
                        )
                    }

                    return false;
                })}
            </ul>
        )
    }
}

export default RecipesList;