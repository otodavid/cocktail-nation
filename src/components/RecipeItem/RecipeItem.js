import styles from "./RecipeItem.module.scss";
import { motion } from "framer-motion";

const RecipeItem = ({ data }) => {
  return (
    <>
      <figure className={styles.card}>
        <motion.div className={styles.cardImage} layoutId={data.idDrink}>
          <img src={data.strDrinkThumb} alt={data.strDrink} />
        </motion.div>

        <figcaption className={styles.cardContent}>
          <p>
            <strong>{data.strDrink}</strong>
          </p>
        </figcaption>
      </figure>
    </>
  );
};

export default RecipeItem;
