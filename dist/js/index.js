import { cocktails } from './cocktail.js';
import { ui } from './ui.js'

const menuButton = document.querySelector('.menu-toggle');
const searchInput = document.querySelector('#search');
const recipes = document.querySelectorAll('.recipes');
const close = document.querySelector('.close');

// functions
function toggleMenu() {
    const headerNav = document.querySelector('.header-nav');
    const menuLinks = document.querySelectorAll('.menu-item');

    menuButton.classList.toggle('open');
    headerNav.classList.toggle('open');
    menuLinks.forEach(item => item.classList.toggle('open'));
}

function displaySearchedCocktails() {
    const content = document.querySelector('.content .recipes');

    cocktails.searchCocktail(searchInput.value)
        .then(drinks => {
            content.innerHTML = '';
            content.classList.remove('empty');

            ui.displayCocktails(drinks, content);
        });
}

function displaySectionCocktails() {
    const randomSection = document.querySelector('.random .recipes');
    const popularSection = document.querySelector('.popular .recipes');
    const latestSection = document.querySelector('.latest .recipes');

    // display random cocktails if on the index page to avoid console error
    if (randomSection) {
        cocktails.getCocktails('random')
            .then(data => {
                ui.displayCocktails(data, randomSection)
            })
            .catch(error => {
                console.error(error);
            })
    }

    // display popular cocktails if on the main recipe page to avoid console error
    if (popularSection) {
        cocktails.getCocktails('popular')
            .then(data => {
                ui.displayCocktails(data, popularSection)
            })
            .catch(error => {
                console.error(error);
            })
    }

    // display latest cocktails if on the main recipe page
    if (latestSection) {
        cocktails.getCocktails('latest')
            .then(data => {
                ui.displayCocktails(data, latestSection)
            })
            .catch(error => {
                console.error(error);
            })
    }
}

// event listeners
menuButton.addEventListener('click', toggleMenu);
searchInput.addEventListener('keyup', displaySearchedCocktails);
document.addEventListener("DOMContentLoaded", displaySectionCocktails);
recipes.forEach(recipeSection => {
    recipeSection.addEventListener('click', (e) => {
        ui.displayModal(e.target)
    })
})
close.addEventListener('click', ui.closeModal);
