import styles from "./Contact.module.scss";
import { Form } from "../components/Form";
import { Button } from "../components/Button";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import {
  introChildVariants,
  introVariants,
  pageVariants,
  scaleUpVariant,
} from "../animations";
import phoneIcon from "../assets/phone.svg";
import locationIcon from "../assets/location.svg";

const Top = () => {
  return (
    <div className={styles.backgroundOverlay}>
      <motion.div className={styles.intro} variants={introVariants}>
        <motion.h2 variants={introChildVariants}>
          <span>Contact</span> us
        </motion.h2>
        <motion.p variants={introChildVariants}>
          Don't be shy to ask questions. Please contact us by phone or email.
        </motion.p>
      </motion.div>
    </div>
  );
};

const MainContent = ({ setIsFormSubmitted }) => {
  return (
    <motion.div className={styles.content} variants={scaleUpVariant}>
      <div className={styles.sendMessage}>
        <header>
          <h3>Send Message</h3>
          <i className="far fa-envelope"></i>
        </header>
        <Form setIsFormSubmitted={setIsFormSubmitted} />
      </div>

      <div className={styles.contactInfo}>
        <h3>Contact Information</h3>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <img src={locationIcon} alt="Location Icon" />
            <p>65 Webb Road, Tighes Hill, New South Wales, Australia</p>
          </div>
          <div className={styles.infoItem}>
            <img src={phoneIcon} alt="Phone Icon" width="20" />
            <p>+61 (02) 4917 8723</p>
          </div>
        </div>
        <div className={styles.socials}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <Button type="button">
              <i className="fab fa-instagram"></i>
            </Button>
            <Button type="button">
              <i className="fab fa-twitter"></i>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <>
      <Helmet>
        <title>Cocktail Nation | Contact Us</title>
      </Helmet>
      <motion.div
        className={styles.contact}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Top />
        <MainContent setIsFormSubmitted={setIsFormSubmitted} />
      </motion.div>

      {isFormSubmitted ? (
        <Modal modalState="open" setIsFormSubmitted={setIsFormSubmitted} />
      ) : (
        <Modal modalState="closed" />
      )}
    </>
  );
};

export default Contact;
