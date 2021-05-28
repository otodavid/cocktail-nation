import image from '../assets/hero-image.png';
import { Button } from '../components/Button';
import { SlantContainer } from '../components/SlantContainer';
import { ToolsContainer } from '../components/ToolsContainer';
import { RecipeContainer } from '../components/RecipeContainer';
import { GradientBackground } from '../components/GradientBackground';
import './Home.scss';
import pic from '../assets/banner.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    // const modal = useContext(ModalContext);
    // console.log(modal);

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>homemade <span>coctails</span> can be better</h1>
                    <p>
                        Why go out to get a couple of drinks when you can make your own elegant cocktails at home? You ready?
                    </p>
                    <Link to="/recipes">
                        <Button className="btn">view recipes</Button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img src={image} alt="Red cocktail in a glass cup"/>
                </div>
                <SlantContainer pos="-1px" />
            </section>

            <section className="tools-highlight">
                <h2>Get the right <span>tools</span></h2>
                <ToolsContainer numberOfTools={3} />
                <Link to="/tools">
                    <Button className="btn">
                        view all
                    </Button>
                </Link>

                <SlantContainer bgColor="#303134" pos="-1px" />
            </section>

            <section className="top-recipes">
                <h2>Top <span>recipes</span></h2>
                <RecipeContainer />
                <Link to="/recipes">
                    <Button className="btn">
                        view more
                    </Button>
                </Link>
            </section>

            <GradientBackground bgImage={pic}>
                <h1>Try a deliciously elegant <span>cocktail</span> now</h1>
            </GradientBackground>
        </div>
    )
}

export default Home
