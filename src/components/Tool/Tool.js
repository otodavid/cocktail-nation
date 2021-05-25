import styles from './Tool.module.scss'

const Tool = ({data}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={data.image} alt={data.imageAlt} />
            </div>
            <div className={styles.cardContent}>
                <h3>{data.name}</h3>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}

export default Tool
