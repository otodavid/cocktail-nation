import image from '../assets/hero-image.png';
import { Button } from '../components/Button';
import { SlantContainer } from '../components/SlantContainer';
import { ToolsContainer } from '../components/ToolsContainer'
import { RecipeContainer } from '../components/RecipeContainer'
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
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
                <SlantContainer pos={0} bgColor="#FBFFFE" />
            </section>

            <section className="tools-highlight">
                <h2>Get the right <span>tools</span></h2>
                <ToolsContainer numberOfTools={3} />
                <Button className="btn">
                    view all
                </Button>

                <SlantContainer bgColor="#303134" pos={0} />
            </section>

            <section className="top-recipes">
                <h2>Top <span>recipes</span></h2>
                
                <RecipeContainer />
                <Button className="btn">
                    view more
                </Button>
            </section>
        </div>
    )
}

export default Home
