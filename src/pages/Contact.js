import styles from "./Contact.module.scss";
import { Form } from "../components/Form";
import { Button } from "../components/Button";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { motion } from "framer-motion";
import { introChildVariants, introVariants, pageVariants, scaleUpVariant } from "../animations";

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
        <div className={styles.backgroundOverlay}>
          <motion.div className={styles.intro} variants={introVariants}>
            <motion.h2 variants={introChildVariants}>
              <span>Contact</span> us
            </motion.h2>
            <motion.p variants={introChildVariants}>
              Don't be shy to ask questions. Please contact us by phone or
              email.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className={styles.content}
          variants={scaleUpVariant}
        >
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>65 Webb Road, Tighes Hill, New South Wales, Australia</p>
              </div>
              <div className={styles.infoItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
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
