import './Header.scss';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="content">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Cocktail Nation Logo" />
                    </Link>
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
                            <Link to="/" className="menu-link active">Home
                            </Link>
                        </li>
                        <li className={`
                            menu-item
                            ${isMenuOpen ? "open" : ""}`
                        }>
                            <Link to="/recipes" className="menu-link">Recipes
                            </Link>
                        </li>
                        <li className={`
                            menu-item
                            ${isMenuOpen ? "open" : ""}`
                        }>
                            <Link to="/contact" className="menu-link">Contact
                            </Link>
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
