class IngredientService {

    async getIngredients() {
        const query = {
            query: `
            {
                ingredients {
                    _id,
                    name,
                    type
                }
            }
            `
        }

        let data = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        });

        let json = await data.json();

        return json.data.ingredients;
    }

    async addIngredient(ingredient) {
        let data = await fetch('/add-ingredient', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingredient)
            
        });

        let json = await data.json();

        return json;
    }
}

export default new IngredientService();