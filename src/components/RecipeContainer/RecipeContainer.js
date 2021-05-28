import styles from './RecipeContainer.module.scss';
import { RecipeCard } from '../RecipeCard';
import { useContext } from 'react';
import { SingleDataContext, ModalContext, RecipesDataContext } from '../../App';

const RecipeContainer = () => {
    const { setIsModalOpen } = useContext(ModalContext);

    const { setSingleData } = useContext(SingleDataContext);

    const { recipesData } = useContext(RecipesDataContext);
    
    return (
        <div className={styles.container}>

            { recipesData && recipesData.map(recipe => (
                <div 
                    key={recipe.idDrink} 
                    onClick={() => {
                        setIsModalOpen(true)
                        setSingleData(recipe)    
                    }}
                >
                    <RecipeCard data={recipe}  />
                </div>
            ))}
        </div>
    )
}

export default RecipeContainer
