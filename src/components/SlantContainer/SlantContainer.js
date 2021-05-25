import styles from './SlantContainer.module.scss';

const SlantContainer = ({pos, bgColor}) => {
    return (
        <div 
            className={styles.div}
            style={{bottom: pos, backgroundColor: bgColor}}    
        > 
        </div>
    )
}

export default SlantContainer
