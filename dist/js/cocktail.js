import COCKTAILDB_API_KEY from './apiKey.js';

class Cocktails {
    // Search API database
    async searchCocktail(inputData) {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${COCKTAILDB_API_KEY}/search.php?s=${inputData}`);
            const res = await response.json();
            const data = await res.drinks;
            return data;
        } catch (error) {
            console.error(error.message);
        }
    };

    // retrive data from API
    async getCocktails(retrievalType) {
        let endpoint;

        // change endpoint depending on the type of information to retrieve
        switch (retrievalType) {
            case 'popular':
                endpoint = `https://www.thecocktaildb.com/api/json/v2/${COCKTAILDB_API_KEY}/popular.php`;
                break;
            
            case 'latest':
                endpoint = `https://www.thecocktaildb.com/api/json/v2/${COCKTAILDB_API_KEY}/latest.php`;
                break;

            case 'random':
                endpoint = `https://www.thecocktaildb.com/api/json/v2/${COCKTAILDB_API_KEY}/randomselection.php`;
                break;

            default:
                endpoint = `https://www.thecocktaildb.com/api/json/v2/${COCKTAILDB_API_KEY}/latest.php`;
                break;
        }

        try {
            const res = await fetch(endpoint);
            const resData = await res.json();
            return resData.drinks;
        } catch (error) {
            console.error("error at API", error.message);
        }
    }
}

export const cocktails = new Cocktails();