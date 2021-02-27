import {
    cocktails
} from './cocktail.js';



const menuButton = document.querySelector('.menu-toggle');

const toggleMenu = () => {
    const headerNav = document.querySelector('.header-nav');
    const menuLinks = document.querySelectorAll('.menu-item');

    menuButton.classList.toggle('open');
    headerNav.classList.toggle('open');
    menuLinks.forEach(item => item.classList.toggle('open'));
}

menuButton.addEventListener('click', toggleMenu);

const searchInput = document.querySelector('#search');

searchInput.addEventListener('keyup', () => {

    const content = document.querySelector('.content .recipes');
    let output = '';

    cocktails.getCocktails(searchInput.value)
        .then(drinks => {
            content.innerHTML = '';
            content.classList.remove('empty');

            drinks.cocktail.forEach(drink => {
                output = `
           <figure class="recipe-item">
              <img src="${drink.strDrinkThumb}" alt="${drink.strDrink} cocktail">
              <figcaption>
                  <p class="recipe-name">${drink.strDrink}</p>
                  <p class="hide recipe-instructions">${drink.strInstructions}</p>
                  <ul class="hide recipe-ingredients">
                    <li>${drink.strIngredient1}</li>
                    <li>${drink.strIngredient2}</li>
                    <li>${drink.strIngredient3}</li>
                    <li>${drink.strIngredient4}</li>
                    <li>${drink.strIngredient5}</li>
                    <li>${drink.strIngredient6}</li>
                    <li>${drink.strIngredient7}</li>
                    <li>${drink.strIngredient8}</li>
                    <li>${drink.strIngredient9}</li>
                    <li>${drink.strIngredient10}</li>
                    <li>${drink.strIngredient11}</li>
                    <li>${drink.strIngredient12}</li>
                    <li>${drink.strIngredient13}</li>
                    <li>${drink.strIngredient14}</li>
                    <li>${drink.strIngredient15}</li>
                  </ul>
                  <a href="recipes.html" class="btn-secondary">View Recipe</a>
              </figcaption>
          </figure>`
                content.innerHTML += output;
            });
        });
})

const modal = document.querySelector('.modal-wrapper');
const recipes = document.querySelectorAll('.recipes');
recipes.forEach(recipeSection => {
    recipeSection.addEventListener('click', (e) => {
        console.log(e.target.closest('figure'));

        if (e.target.closest('figure')) {
            const recipeItem = e.target.closest('figure');
            modal.classList.add('open');
            const recipeName = recipeItem.querySelector('.recipe-name');
            const recipeImage = recipeItem.querySelector('img');
            const recipeInstructions = recipeItem.querySelector('.recipe-instructions');
            const recipeIngrdients = recipeItem.querySelectorAll('.recipe-ingredients li');

            const name = modal.querySelector('.name');
            const image = modal.querySelector('img');
            const steps = modal.querySelector('.steps');
            const ingredients = modal.querySelector('.ingredients');

            name.innerHTML = recipeName.textContent;
            steps.innerHTML = recipeInstructions.textContent;
            image.setAttribute('src', recipeImage.getAttribute('src'));
            console.log([...recipeIngrdients])
            let output = '';
            [...recipeIngrdients].forEach(ingredient => {
                if (ingredient.textContent !== "null") {
                    output += `<li>${ingredient.textContent}</li>`
                    // console.log(ingredient)
                }
            })
            console.log(output)
            ingredients.innerHTML = output;
        }
    })
})


const close = document.querySelector('.close');
close.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('open');
    // modal.querySelector('.name').innerHTML = '';
    // modal.querySelector('img').innerHTML = '';
    // modal.querySelector('.steps').innerHTML = '';
    // modal.querySelector('.ingredients').innerHTML = '';
}


document.addEventListener("DOMContentLoaded", () => {
    const popularSection = document.querySelector('.highlights .recipes')
    let output = '';
    cocktails.getPopularCocktails()
        .then(data => {
            data.forEach(item => {
                output = `
                <figure class="recipe-item">
                   <img src="${item.strDrinkThumb}" alt="${item.strDrink} cocktail">
                   <figcaption>
                       <p class="recipe-name">${item.strDrink}</p>
                       <p class="hide recipe-instructions">$itemk.strInstructions}</p>
                       <ul class="hide recipe-ingredients">
                         <li>${item.strIngredient1}</li>
                         <li>${item.strIngredient2}</li>
                         <li>${item.strIngredient3}</li>
                         <li>${item.strIngredient4}</li>
                         <li>${item.strIngredient5}</li>
                         <li>${item.strIngredient6}</li>
                         <li>${item.strIngredient7}</li>
                         <li>${item.strIngredient8}</li>
                         <li>${item.strIngredient9}</li>
                         <li>${item.strIngredient10}</li>
                         <li>${item.strIngredient11}</li>
                         <li>${item.strIngredient12}</li>
                         <li>${item.strIngredient13}</li>
                         <li>${item.strIngredient14}</li>
                         <li>${item.strIngredient15}</li>
                       </ul>
                       <a href="recipes.html" class="btn-secondary">View Recipe</a>
                   </figcaption>
               </figure>`
                popularSection.innerHTML += output;
            });
        })
})