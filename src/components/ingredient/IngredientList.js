import React from 'react';

export class IngredientList extends React.Component {
    componentDidMount() {
        this.props.fetchIngredientList(this.props.match.params.weekNumber);
    }

    render() {
        if (this.props.fetched) {
            return (
                <div>
                    <h1>{this.props.currentIngredientList.weekNumber}</h1>
                    <ul>
                        {this.props.currentIngredientList.ingredientAmounts.map((ingredientAmount, key) => {
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