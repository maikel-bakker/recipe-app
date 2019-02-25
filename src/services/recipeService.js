class RecipeService {

    async getRecipes() {
        let res = await fetch('http://localhost:4000/get-recipes');
        let resJson = await res.json();

        return resJson;
    }

    async addRecipe(recipe) {
        let data = await fetch('/add-recipe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)

        });

        let json = await data.json();

        return json;
    }
}

export default new RecipeService();
