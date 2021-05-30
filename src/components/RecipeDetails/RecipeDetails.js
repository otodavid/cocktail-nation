import { Button } from "../Button";
import styles from './RecipeDetails.module.scss';
import { useContext } from "react";
import { SingleDataContext, ModalContext } from '../../App';

const RecipeDetails = () => {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const { singleData } = useContext(SingleDataContext);

    const checkRecipe = isModalOpen ? styles.open : styles.close;

    const closeModal = (e) => {
        e.target.classList.contains("close-modal") ? setIsModalOpen(false) : setIsModalOpen(true);
    }

    const steps = singleData.strInstructions !== undefined ? singleData.strInstructions.split(". ") : [];

    const convertedArray = Object.entries(singleData);    
    let ingredients = [];
    convertedArray.forEach(arr => {
        if(!arr.includes(null) && arr[0].startsWith("strIngredient")) {
            ingredients.push(arr[1]);
        }
    })

    return (
        <div 
            className={`${styles.recipeDetails} ${checkRecipe} close-modal`}
            onClick={closeModal}
        >
            <div className={styles.cocktail}>
                <header>
                    <h3>{singleData.name || singleData.strDrink}</h3>
                    <Button onClick={closeModal}>
                        <i className="fas fa-times close-modal"></i>
                    </Button>
                </header>
                <div className={styles.details}>
                    <div className={styles.detailsImage}>
                        <img src={singleData.image || singleData.strDrinkThumb} alt=""/>
                    </div>
                    <div className={styles.detailsIngredients}>
                        <p>cocktail <span>ingredients</span></p>
                        <ul>
                            { ingredients.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.detailsSteps}>
                        <p>How to <span>prepare</span></p>
                        <ol>
                            { steps.map((step, index) => (
                                <li key={index}>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails
