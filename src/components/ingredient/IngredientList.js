import React from 'react';
import PropTypes from 'prop-types';

export class IngredientList extends React.Component {
    componentDidMount() {
        this.props.fetchIngredientList(this.props.match.params.weekNumber);
    }

    render() {
        if (this.props.fetched) {
            const ingredientAmounts = this.props.currentIngredientList.ingredientAmounts;

            return (
                <div>
                    <h1>{this.props.currentIngredientList.weekNumber}</h1>
                    <ul>
                        {ingredientAmounts.map((ingredientAmount, key) => {
                            return <li key={key}>{ingredientAmount.ingredient.name}: {ingredientAmount.amount} {ingredientAmount.amountUnit}</li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

IngredientList.propTypes = {
    fetchIngredientList: PropTypes.func,
    match: PropTypes.object,
    fetched: PropTypes.bool,
    currentIngredientList: PropTypes.arrayOf(PropTypes.shape({
        weekNumber: PropTypes.number,
        ingredientAmounts: PropTypes.shape({
            name: PropTypes.string,
            amount: PropTypes.number,
            amountUnit: PropTypes.string
        })
    }))
}