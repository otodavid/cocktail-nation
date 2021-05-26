import { GradientBackground } from "../components/GradientBackground";
import toolsPic from '../assets/tools.jpg';
import { ToolsContainer } from "../components/ToolsContainer";

const Tools = () => {
    return (
        <div>
            <GradientBackground bgImage={toolsPic}
                height="300px"
            >
                <h2>Basic <span>Tools</span></h2>
                <p>
                    Having the right tools on hand is the first step in making a great cocktail. Bartenders use a variety of unusual tools that make them appear to be lab scientists
                </p>
            </GradientBackground>

            <ToolsContainer numberOfTools={9}></ToolsContainer>
        </div>
    )
}

export default Tools
