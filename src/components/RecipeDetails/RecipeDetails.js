import { Button } from "../Button";
import styles from "./RecipeDetails.module.scss";
import { useContext } from "react";
import { SingleDataContext, ModalContext } from "../../App";
import { AnimatePresence, motion } from "framer-motion";

const dropShadowVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
    },
  },
};

const modalVariant = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const modalDetails = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      ease: "easeInOut",
      mass: .6,
      stiffnenss: 100,
      delay: 0.3,
    },
  },
};

const RecipeDetails = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const { singleData } = useContext(SingleDataContext);

  const closeModal = (e) => {
    e.target.classList.contains("close-modal")
      && setIsModalOpen(false)
  };

  const steps =
    singleData.strInstructions !== undefined
      ? singleData.strInstructions.split(". ")
      : [];

  const convertedArray = Object.entries(singleData);
  let ingredients = [];
  convertedArray.forEach((arr) => {
    if (!arr.includes(null) && arr[0].startsWith("strIngredient")) {
      ingredients.push(arr[1]);
    }
  });

  return (
    <AnimatePresence exitBeforeEnter>
      {isModalOpen && (
        <motion.div
          className={`${styles.dropShadow} close-modal`}
          onClick={closeModal}
          variants={dropShadowVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className={styles.modal} variants={modalVariant}>
          {/* Modal header */}
            <header>
              <h3>{singleData.name || singleData.strDrink}</h3>
              <Button onClick={closeModal}>
                <i className="fas fa-times close-modal"></i>
              </Button>
            </header>
            
            <div className={styles.details}>
            {/* Modal Image */}
              <div className={styles.detailsImage}>
                <motion.img
                  src={singleData.image || singleData.strDrinkThumb}
                  alt={singleData.name || singleData.strDrink}
                  layoutId={singleData.idDrink}
                  transition={{ duration: 0.4 }}
                />
                
              </div>
              
              {/* Steps and Ingredients */}
              <motion.div
                className={styles.detailsIngredients}
                variants={modalDetails}
              >
                <p>
                  cocktail <span>ingredients</span>
                </p>
                <ul>
                  {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                className={styles.detailsSteps}
                variants={modalDetails}
              >
                <p>
                  How to <span>prepare</span>
                </p>
                <ol>
                  {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecipeDetails;
