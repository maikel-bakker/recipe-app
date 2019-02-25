import { addRecipe } from '../../actions/recipesActions';
import { fetchIngredients } from '../../actions/ingredientActions';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';

const mapStateToProps = state => {
    return {
        recipes: state.recipes.items,
        ingredients: state.ingredients.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addRecipe: recipe => {
            dispatch(addRecipe(recipe));
        },
        getIngredients: () => dispatch(fetchIngredients())
    };
};

const RecipesFormContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeForm);

export default RecipesFormContainer;
