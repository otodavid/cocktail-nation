const menuButton = document.querySelector('.menu-toggle');

const toggleMenu  = () => {
    const headerNav = document.querySelector('.header-nav');
    const menuLinks = document.querySelectorAll('.menu-item');
    
    menuButton.classList.toggle('open');
    headerNav.classList.toggle('open');
    menuLinks.forEach(item => item.classList.toggle('open'));
}

menuButton.addEventListener('click', toggleMenu);