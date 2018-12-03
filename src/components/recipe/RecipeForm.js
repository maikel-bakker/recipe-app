import React from 'react';
import IngredientInput from './IngredientInput';

class RecipeForm extends React.Component {
    emptyIngredientAmount = {
        ingredientId: '',
        amount: ''
    };

    emptyIngredient = {
        _id: ''
    };

    state = {
        ingredients: [this.emptyIngredient],
        ingredientAmounts: [this.emptyIngredientAmount],
        steps: ["First step"],
    }
    
    componentDidMount() {
        this.props.getIngredients();
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value 
        })        
    }

    addRecipe(event) {
        event.preventDefault();
        this.props.addRecipe(this.state);
    }

    addIngredientAndAmount(event) {
        event.preventDefault();

        this.setState(prevState => ({
            ingredients: [...prevState.ingredients, this.emptyIngredient],
            ingredientAmounts: [...prevState.ingredientAmounts, this.emptyIngredientAmount]
        }))
    }

    handleIngredientInputChange(event) {
        const key = event.target.getAttribute('data-index');
        const ingredientId = event.target.value;
        const amount = event.target.nextSibling.value;
        
        //TODO: merge setIngredient and setIngredientAmount into one method
        this.setIngredient(key, ingredientId);
        this.setIngredientAmount(key, ingredientId, amount);
    }

    setIngredient(key, ingredientId) {
        const newIngredients = this.state.ingredients;

        newIngredients[key]._id = ingredientId;

        this.setState({
            ingredients: newIngredients
        });
    }

    setIngredientAmount(key, ingredientId, amount) {
        const newIngredientAmounts = this.state.ingredientAmounts;

        newIngredientAmounts[key] = {
            ingredientId: ingredientId,
            amount: amount
        }
        
        this.setState({
            ingredientAmounts: newIngredientAmounts
        });
    }

    handleIngredientAmountInputChange(event) {
        const element = event.target;
        const ingredientInput = element.previousSibling;
        const key = element.getAttribute('data-index');

        this.setIngredientAmount(key, ingredientInput.value, element.value)
    }

    addStep(event) {
        event.preventDefault();

        this.setState(prevState => ({
            steps: [...prevState.steps, ""]
        }))
    }

    handleStepInputChange(event) {
        const key = event.target.getAttribute('data-index');
        const stepText = event.target.value;

        const newSteps = this.state.steps;
        newSteps[key] = stepText;

        this.setState({
            steps: newSteps
        })
    }

    render() {
        return (
            <form id="form" onSubmit={this.addRecipe.bind(this)}>
                <div>
                    <label>
                        Title
                    </label>
                    <input type="text" name="title" onChange={this.handleInputChange.bind(this)} />
                </div>

                <div>
                    <label>
                        Description
                    </label>
                    <textarea name="description" onChange={this.handleInputChange.bind(this)}></textarea>
                </div>

                <div>
                    <label>
                        Serves
                    </label>
                    <input type="number" name="serves" onChange={this.handleInputChange.bind(this)} />
                </div>

                <div>
                    <label>
                        Cook time
                    </label>
                    <input type="number" name="cookTime" onChange={this.handleInputChange.bind(this)} />
                </div>
            
                <button onClick={this.addIngredientAndAmount.bind(this)}>Add Ingredient</button>

                {this.state.ingredients.map((input, i) => {
                    return <IngredientInput 
                            key={i}
                            index={i}
                            name={`ingredients[${i}]`}
                            ingredients={this.props.ingredients} 
                            onChange={this.handleIngredientInputChange.bind(this)}
                            amountOnChange={this.handleIngredientAmountInputChange.bind(this)}
                           />
                })}
                
                <button onClick={this.addStep.bind(this)}>Add Step</button>

                {this.state.steps.map((step, i) => {
                    return <textarea key={i} data-index={i} defaultValue={step} onChange={this.handleStepInputChange.bind(this)}></textarea>
                })}

                <hr/>

                <button type="submit">
                    Add Recipe
                </button>
            </form>
        )
    }
}

export default RecipeForm;