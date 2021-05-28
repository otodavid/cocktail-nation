import styles from './RecipeContainer.module.scss';
import { recipeData } from './data'
import { RecipeCard } from '../RecipeCard';
import { useContext, useEffect } from 'react';
import { ModalContext } from '../../App';

const RecipeContainer = () => {
    useEffect(() => {
        
        return () => {
            // cleanup
        }
    }, [])

    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

    return (
        <div className={styles.container}>
            {recipeData.map(recipe => (
                <div 
                    key={recipe.id} 
                    onClick={() => setIsModalOpen(true)}
                >
                    <RecipeCard data={recipe}  />
                </div>
            ))}
        </div>
    )
}

export default RecipeContainer
