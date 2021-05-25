import styles from './RecipeContainer.module.scss';
import { recipeData } from './data'
import { RecipeCard } from '../RecipeCard';

const RecipeContainer = () => {
    return (
        <div className={styles.container}>
            {recipeData.map(recipe => (
                <RecipeCard data={recipe} key={recipe.id} />
            ))}
        </div>
    )
}

export default RecipeContainer
