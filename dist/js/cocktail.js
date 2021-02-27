import COCKTAILDB_API_KEY from './apiKey.js';

class Cocktails {
    // fetch cocktail from api database
    async getCocktails(cocktail) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${COCKTAILDB_API_KEY}/search.php?s=${cocktail}`);
            const res = await response.json();
            const data = await res.drinks;
            return { cocktail: data };
        } catch (error) {
            console.error(error.message);
        }

    };

    async getPopularCocktails() {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v2/${COCKTAILDB_API_KEY}/popular.php`);
        const resData = await res.json();
        return resData.drinks;
    }
}

export const cocktails = new Cocktails();