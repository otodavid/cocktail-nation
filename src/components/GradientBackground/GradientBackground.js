import './GradientBackground.scss';

const GradientBackground = ({ height, bgImage, children }) => {
    return (
        <div 
            className="gradient-bg"
            style={{backgroundImage: `url(${bgImage})`, height: height }}    
        >
            <div>
                {children}
            </div>
        </div>
    )
}

export default GradientBackground
