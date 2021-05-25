import logo from '../../assets/logo.svg';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerTop}>
                <div className={styles.logo}>
                    <img src={logo} alt="Cocktail Nation Logo"/>
                </div>
                <ul className={styles.nav}>
                    <li>
                        <a href="">Recipe</a>
                    </li>
                    <li>
                        <a href="">Tools</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                <div className={styles.socials}>
                    <a href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
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
    )
}

export default Footer
