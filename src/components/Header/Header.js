import './Header.scss';

const Header = () => {
    return (
        <header>
            <nav className="headerNav">
                <div className="logo">
                    <a href="index.html">
                        <img src="./images/Logo.svg" alt="Cocktail Nation Logo" />
                    </a>
                </div>

                <ul className="menu">
                    <li className="menuItem">
                        <a href="index.html" className="menuLink active">Home
                        </a>
                    </li>
                    <li className="menuItem">
                        <a href="recipes.html" className="menuLink">recipes</a>
                    </li>
                    <li className="menuItem">
                        <a href="contact.html" className="menuLink">contact</a>
                    </li>
                </ul>

                <button type="button" className="menuToggle"></button>
            </nav>
        </header>
    )
}

export default Header
