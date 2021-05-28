import { Button } from "../Button";
import cocktail from '../../assets/recipe1.jpg';
import styles from './RecipeDetails.module.scss';
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from '../../App';

const RecipeDetails = () => {

    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

    const checkRecipe = isModalOpen ? styles.open : styles.close;

    const closeModal = (e) => {
        e.target.classList.contains("close-modal") ? setIsModalOpen(false) : setIsModalOpen(true);
    }

    return (
        <div 
            className={`${styles.recipeDetails} ${checkRecipe} close-modal`}
            onClick={closeModal}
        >
            <div className={styles.cocktail}>
                <header>
                    <h3>Strawberry Saringa</h3>
                    <Button onClick={closeModal}>
                        <i className="fas fa-times close-modal"></i>
                    </Button>
                </header>
                <div className={styles.details}>
                    <div className={styles.detailsImage}>
                        <img src={cocktail} alt=""/>
                    </div>
                    <div className={styles.detailsIngredients}>
                        <p>cocktail <span>ingredients</span></p>
                        <ul>
                            <li>Salt</li>
                            <li>Vodka</li>
                            <li>Rice</li>
                            <li>Beans</li>
                        </ul>
                    </div>
                    <div className={styles.detailsSteps}>
                        <p>How to <span>prepare</span></p>
                        <ol>
                            <li>Do this</li>
                            <li>Do that</li>
                            <li>Then this</li>
                            <li>Then this that</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails
