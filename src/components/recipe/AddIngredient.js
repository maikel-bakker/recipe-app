import React from 'react';
import PropTypes from 'prop-types';

export class AddIngredient extends React.Component {
    state = {
        ingredient: {
            name: '',
            type: ''
        }
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(prevState => {
            return {
                ingredient: { ...prevState.ingredient, [name]: value }
            };
        });
    }

    submitIngredient(event) {
        event.preventDefault();
        this.props.addIngredient(this.state.ingredient);
    }

    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="Ingredient name" onChange={event => this.handleInputChange(event)} />
                <input type="text" name="type" placeholder="Ingredient type" onChange={event => this.handleInputChange(event)} />

                <button type="submit" onClick={event => this.submitIngredient(event)}>Add ingredient</button>
            </div>
        );
    }
}

AddIngredient.propTypes = {
    addIngredient: PropTypes.func
};
