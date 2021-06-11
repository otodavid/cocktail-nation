import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function debounce(fn, ms) {
  let timer;

  return (_) => {
    clearTimeout(timer);

    timer = setTimeout((_) => {
      timer = null;

      fn.apply(this, arguments);
    }, ms);
  };
}

const headerVariants = {
  open: {
    height: 250,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 8,
    },
  },
};

const menuVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const menuLinksVariants = {
  closed: {
    opacity: 0,
    x: 100,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 120,
      mass: 0.6,
    },
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "home", path: "/" },
    { name: "tools", path: "/tools" },
    { name: "recipes", path: "/recipes" },
    { name: "contact", path: "/contact" },
  ];

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    dimensions.width > 650 && setIsMenuOpen(false);
  }, [dimensions.width]);

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      animate={isMenuOpen ? "open" : "closed"}
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Cocktail Nation Logo" />
          </Link>
        </div>

        <nav className={styles.headerNav}>
          <motion.ul
            className={styles.menu}
            variants={menuVariants}
            animate={
              dimensions.width < 650 ? (isMenuOpen ? "open" : "closed") : "open"
            }
          >
            {navLinks.map((nav, index) => (
              <motion.li
                className={styles.menuItem}
                key={index}
                variants={menuLinksVariants}
              >
                <NavLink
                  to={nav.path}
                  className={styles.menuLink}
                  exact
                  activeClassName={styles.active}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {nav.name}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <button
          type="button"
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></button>
      </div>
    </motion.header>
  );
};

export default Header;
