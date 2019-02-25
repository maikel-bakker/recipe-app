import { fetchRecipes } from '../../actions/recipesActions';
import { connect } from 'react-redux';
import RecipesList from './RecipesList';

const mapStateToProps = state => {
    return {
        recipes: state.recipes.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: () => {
            dispatch(fetchRecipes());
        }
    };
};

const RecipesListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipesList);

export default RecipesListContainer;
