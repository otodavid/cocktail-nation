import './GradientBackground.scss';

const GradientBackground = ({ bgImage, children }) => {
    return (
        <div 
            className="gradient-bg"
            style={{backgroundImage: `url(${bgImage})` }}    
        >
            <div>
                {children}
            </div>
        </div>
    )
}

export default GradientBackground
