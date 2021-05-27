import styles from './GradientBackground.module.scss';

const GradientBackground = ({ bgImage, children }) => {
    return (
        <div 
            className={styles.gradientBg}
            style={{backgroundImage: `url(${bgImage})`}}    
        >
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default GradientBackground
