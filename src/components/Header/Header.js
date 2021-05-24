import './Header.scss';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {name: "home", path: "/"},
        {name: "recipes", path: "/recipes"},
        {name: "contact", path: "/contact"},
    ]

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

                        {navLinks.map((nav, index) => (
                            <li 
                                className={`menu-item ${isMenuOpen ? "open" : ""}`}
                                key={index}
                            >
                                <NavLink to={nav.path} 
                                    className="menu-link"
                                    exact
                                    activeClassName="active"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {nav.name}
                                </NavLink>
                            </li>
                        ))}
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
