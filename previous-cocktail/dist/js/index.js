import { cocktails } from './cocktail.js';
import { ui } from './ui.js'

const menuButton = document.querySelector('.menu-toggle');
const searchInput = document.querySelector('#search');
const form = document.querySelector('form');
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

function displaySearchedCocktails(e) {
    e.preventDefault();
    const content = document.querySelector('.content .recipes');
    const home = document.querySelector('.home');
    const loader = document.querySelector('.loader');
    
    if(searchInput.value === '') {
        content.innerHTML = '';
        home.classList.remove('active');
        content.classList.add('empty');
        loader.classList.remove('active');
        ui.showAlert("This input box won't fill itself", 'active')
    } else {
        loader.classList.add('active');

        cocktails.searchCocktail(searchInput.value)
        .then(drinks => {
            home.classList.add('active')
            content.innerHTML = '';
            content.classList.remove('empty');
            loader.classList.remove('active');
            ui.hideAlert('active');

            ui.displayCocktails(drinks, content);
        });
    }

    
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
form.addEventListener('submit', (e) => {
    displaySearchedCocktails(e);
});
document.addEventListener("DOMContentLoaded", displaySectionCocktails);
recipes.forEach(recipeSection => {
    recipeSection.addEventListener('click', (e) => {
        ui.displayModal(e.target)
    })
})
close.addEventListener('click', ui.closeModal);
