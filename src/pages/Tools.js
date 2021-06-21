import toolsPic from "../assets/tools.jpg";
import { ToolsList } from "../components/ToolsList";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  introVariants,
  pageVariants,
  introChildVariants,
  contentFadeInVariant,
} from "../animations";
import { Box } from "../components/Box";

const Tools = () => {
  return (
    <>
      <Helmet>
        <title>Cocktail Nation | Tools</title>
      </Helmet>
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div variants={introVariants}>
          <Box type="backgroundBox" bgImage={toolsPic}>
            <motion.h2 variants={introChildVariants}>
              Basic <span>Tools</span>
            </motion.h2>
            <motion.p variants={introChildVariants}>
              Having the right tools on hand is the first step in making a great
              cocktail. Bartenders use a variety of unusual tools that make them
              appear to be lab scientists
            </motion.p>
          </Box>
        </motion.div>

        <motion.div variants={contentFadeInVariant}>
          <ToolsList numberOfTools={9} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Tools;
