import styles from "./RecipeCard.module.scss";

const RecipeCard = ({data}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={data.image} alt={data.name} />
            </div>
            
            <div className={styles.cardContent}>
                <p><strong>{data.name}</strong></p>
            </div>
        </div>
    )
}

export default RecipeCard
