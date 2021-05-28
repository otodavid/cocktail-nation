import styles from "./RecipeCard.module.scss";

const RecipeCard = ({data}) => {
    return (
            <>
                <figure className={styles.card}>
                    <div className={styles.cardImage}>
                        <img src={data.strDrinkThumb} alt={data.strDrink} />
                    </div>
                    
                    <figcaption className={styles.cardContent}>
                        <p><strong>{data.strDrink}</strong></p>
                    </figcaption>
                </figure>
            </>
    )
}

export default RecipeCard
