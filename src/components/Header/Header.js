import './Header.scss';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="content">
                <div className="logo">
                    <a href="index.html">
                        <img src={logo} alt="Cocktail Nation Logo" />
                    </a>
                </div>
                
                <nav className={
                    `header-nav 
                    ${isMenuOpen ? "open" : ""}`
                    }
                >
                    <ul className="menu">
                        <li className={`
                            menu-item
                            ${isMenuOpen ? "open" : ""}`
                        }>
                            <a href="index.html" className="menu-link active">Home
                            </a>
                        </li>
                        <li className={`
                            menu-item
                            ${isMenuOpen ? "open" : ""}`
                        }>
                            <a href="index.html" className="menu-link">Recipes
                            </a>
                        </li>
                        <li className={`
                            menu-item
                            ${isMenuOpen ? "open" : ""}`
                        }>
                            <a href="index.html" className="menu-link">Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <button 
                    type="button" 
                    className={`menuToggle ${isMenuOpen ? "open" : "" }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></button>
            </div>
        </header>
    )
}

export default Header
