import image from '../assets/hero-image.png';
import { Button } from '../components/Button';
import { SlantContainer } from '../components/SlantContainer';
import './Home.scss';

const Home = () => {
    return (
        <div className="home test">
            <section className="hero">
                <div className="hero-content">
                    <h1>homemade <span>coctails</span> can be better</h1>
                    <p>
                        Why go out to get a couple of drinks when you can make your own elegant cocktails at home? You ready?
                    </p>
                    <Button className="btn">view recipes</Button>
                </div>
                <div className="hero-image">
                    <img src={image} alt="Red cocktail in a glass cup"/>
                </div>
                
                <SlantContainer pos={0} />
            </section>
        </div>
    )
}

export default Home
