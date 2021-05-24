import styles from './SlantContainer.module.scss';

const SlantContainer = ({pos}) => {
    return (
        <div 
            className={styles.div}
            style={{bottom: pos}}    
        > 
        </div>
    )
}

export default SlantContainer
