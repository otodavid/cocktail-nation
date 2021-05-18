class UI {
    constructor() {
        this.modal = document.querySelector('.modal-wrapper');
    }

    displayCocktails(cocktails, section) {
        let output = '';
        // const popularSection = document.querySelector('.recipes-container .recipes');

        // look through array of cocktail gotten from API
        cocktails.forEach(cocktail => {
            output = `
            <figure class="recipe-item">
               <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink} cocktail">
               <figcaption>
                   <p class="recipe-name">${cocktail.strDrink}</p>
                   <p class="hide recipe-instructions">${cocktail.strInstructions}</p>
                   <ul class="hide recipe-ingredients">
                     <li>${cocktail.strIngredient1}</li>
                     <li>${cocktail.strIngredient2}</li>
                     <li>${cocktail.strIngredient3}</li>
                     <li>${cocktail.strIngredient4}</li>
                     <li>${cocktail.strIngredient5}</li>
                     <li>${cocktail.strIngredient6}</li>
                     <li>${cocktail.strIngredient7}</li>
                     <li>${cocktail.strIngredient8}</li>
                     <li>${cocktail.strIngredient9}</li>
                     <li>${cocktail.strIngredient10}</li>
                     <li>${cocktail.strIngredient11}</li>
                     <li>${cocktail.strIngredient12}</li>
                     <li>${cocktail.strIngredient13}</li>
                     <li>${cocktail.strIngredient14}</li>
                     <li>${cocktail.strIngredient15}</li>
                   </ul>
                   <a href="recipes.html" class="btn-secondary">View Recipe</a>
               </figcaption>
           </figure>`
            section.innerHTML += output;
        });
    }

    displayModal(target) {
        if (target.closest('figure')) {
            const recipeItem = target.closest('figure');
            this.modal.classList.add('open');

            // recipe datails object from what is present in the dom;
            const recipeDetails = {
                name: recipeItem.querySelector('.recipe-name').textContent,
                image: recipeItem.querySelector('img').getAttribute('src'),
                ingredients: recipeItem.querySelectorAll('.recipe-ingredients li'),
                steps: recipeItem.querySelector('.recipe-instructions').textContent,
            }

            // get the list item ingredients from as the dom
            let output = '';
            recipeDetails.ingredients.forEach(ingredient => {
                // display the list items that have ingredients in them
                if (ingredient.textContent !== "" && ingredient.textContent !== "null") {
                    output += `<li>${ingredient.textContent}</li>`
                }
            })

            // update the fields in the modal
            const name = this.modal.querySelector('.name');
            const image = this.modal.querySelector('img');
            const steps = this.modal.querySelector('.steps');
            const ingredients = this.modal.querySelector('.ingredients');

            name.innerHTML = recipeDetails.name;
            steps.innerHTML = recipeDetails.steps;
            image.setAttribute('src', recipeDetails.image);
            ingredients.innerHTML = output;
        }
    }

    closeModal() {
        document.querySelector('.modal-wrapper').classList.remove('open');
    }

    showAlert(message, className) {
        const form = document.querySelector('form');
        const alert = document.querySelector('.alert');
        form.classList.add('error');
        alert.textContent = message;
        alert.classList.add(className);
    }

    hideAlert(className) {
        const form = document.querySelector('form');
        const alert = document.querySelector('.alert');
        form.classList.remove('error');
        alert.classList.remove(className);
    }
}

export const ui = new UI();