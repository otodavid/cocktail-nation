import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {name: "home", path: "/"},
        {name: "tools", path: "/tools"},
        {name: "recipes", path: "/recipes"},
        {name: "contact", path: "/contact"},
    ]

    return (
        <header>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Cocktail Nation Logo" />
                    </Link>
                </div>
                
                <nav className={`
                    ${styles.headerNav} 
                    ${isMenuOpen ? styles.open : ""}`
                    }
                >
                    <ul className={styles.menu}>

                        {navLinks.map((nav, index) => (
                            <li 
                                className={`${styles.menuItem} ${isMenuOpen ? styles.open : ""}`}
                                key={index}
                            >
                                <NavLink to={nav.path} 
                                    className={styles.menuLink}
                                    exact
                                    activeClassName={styles.active}
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
                    className={`${styles.menuToggle} ${isMenuOpen ? styles.open : "" }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></button>
            </div>
        </header>
    )
}

export default Header
