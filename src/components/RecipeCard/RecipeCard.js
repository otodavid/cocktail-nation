import styles from "./RecipeCard.module.scss";

const RecipeCard = ({data}) => {
    return (
            <figure className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={data.image} alt={data.name} />
                </div>
                
                <figcaption className={styles.cardContent}>
                    <p><strong>{data.name}</strong></p>
                </figcaption>
            </figure>
    )
}

export default RecipeCard
