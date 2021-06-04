import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div>
            <footer>
            <div className={styles.footerTop}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Cocktail Nation Logo"/>
                    </Link>
                </div>
                <ul className={styles.nav}>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to="/tools">Tools</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className={styles.socials}>
                    <a href="www.google.com">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="www.google.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>
                    2021 &copy; Cocktail Nations by Oloruntomi
                </p>
            </div>
        </footer>
        </div>
    )
}

export default Footer
