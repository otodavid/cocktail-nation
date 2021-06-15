import styles from "./Loader.module.scss";
import { motion } from "framer-motion";
import loaderPic from "../../assets/loader.png";

const circleVariant = {
  hidden: {
    strokeDashoffset: 440,
    rotate: 0,
  },
  visible: {
    strokeDashoffset: [440, 0, 880, 440],
    rotate: 360,
    transition: {
      duration: 2,
      times: [0, 0.5, 0.501, 1],
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const loaderImgVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.7,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <div className={styles.dropShadow}>
      <div className={styles.loader}>
        <svg>
          <motion.circle
            variants={circleVariant}
            initial="hidden"
            animate="visible"
            fill="none"
            strokeWidth="5"
            cx="75"
            cy="75"
            r="70"
            stroke="#E63B2E"
            strokeLinecap="round"
            strokeDasharray="440"
            strokeDashoffset="440"
          ></motion.circle>
        </svg>

        <motion.img
          src={loaderPic}
          alt="Cocktail nation icon"
          variants={loaderImgVariant}
          initial="hidden"
          animate="visible"
        />
      </div>
    </div>
  );
};

export default Loader;
