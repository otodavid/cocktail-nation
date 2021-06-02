import { GradientBackground } from "../components/GradientBackground";
import toolsPic from "../assets/tools.jpg";
import { ToolsContainer } from "../components/ToolsContainer";
import { Helmet } from "react-helmet";

const Tools = () => {
  return (
    <>
      <Helmet>
        <title>Cocktail Nation | Tools</title>
      </Helmet>
      <div>
        <GradientBackground bgImage={toolsPic}>
          <h2>
            Basic <span>Tools</span>
          </h2>
          <p>
            Having the right tools on hand is the first step in making a great
            cocktail. Bartenders use a variety of unusual tools that make them
            appear to be lab scientists
          </p>
        </GradientBackground>

        <ToolsContainer numberOfTools={9}></ToolsContainer>
      </div>
    </>
  );
};

export default Tools;
