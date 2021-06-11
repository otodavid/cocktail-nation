import { Tool } from "../Tool";
import { toolsData } from "./data";
import { motion } from "framer-motion";
import "./ToolsContainer.scss";

const ToolsContainer = ({ numberOfTools, animation, variants }) => {
  return (
    <motion.div
      className="tools-container"
      animate={animation}
    >
      {toolsData.map((tool) => {
        if (tool.id <= numberOfTools) {
          return <Tool data={tool} key={tool.id} />;
        }
        return true;
      })}
    </motion.div>
  );
};

export default ToolsContainer;