import React from 'react';

class RecipesList extends React.Component {

    componentDidMount() {
        this.props.fetchRecipes();
        console.log(this.props);
    }

    render() {
        return (
            <ul>
                {this.props.recipes.map((recipe) => {
                    if (recipe) {
                        return ( 
                            <li key={recipe._id}>
                                <div>{recipe.name}</div>
                                <div>{recipe.subject}</div>
                                <div>{recipe.email}</div>
                                <div>{recipe.message}</div>
                            </li>
                        )
                    }
                })}
            </ul>
        )
    }
}

export default RecipesList;