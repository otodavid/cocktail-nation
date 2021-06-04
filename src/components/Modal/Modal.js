import styles from "./Modal.module.scss";
import { Button } from "../Button";

const Modal = ({ modalState, setIsFormSubmitted }) => {
  const checkModalState = modalState === "open" ? styles.open : styles.closed;

  const handleModal = (e) => {
    const target =
      e.target.classList.contains("btn") ||
      e.target.classList.contains(styles.overlay);
    
    target && setIsFormSubmitted(false);
  };

  return (
    <div
      className={`${styles.overlay} ${checkModalState}`}
      onClick={handleModal}
    >
      <div className={styles.modal}>
        <i className="far fa-check-circle fa-4x"></i>
        <h2>Great!</h2>
        <p>
          Thanks for reaching out. We will get back to you as soon as possible
        </p>
        <Button className="btn" onClick={handleModal}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
