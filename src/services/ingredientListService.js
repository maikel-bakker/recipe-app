class IngredientListService {
    async getIngredientList(weekNumber) {
        const res = await fetch(`http://localhost:4000/get-ingredients-by-weeknumber/${weekNumber}`);
        
        if (res.ok) {
            return await res.json();
        }
        throw new Error(res.statusText);
    }
}

export default new IngredientListService();