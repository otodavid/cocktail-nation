import { ToolItem } from "../ToolItem";
import { toolsData } from "./data";
import { motion } from "framer-motion";
import "./ToolsList.scss";

const ToolsList = ({ numberOfTools, animation, variants }) => {
  return (
    <motion.div className="tools-container" animate={animation}>
      {toolsData.map((tool) => {
        if (tool.id <= numberOfTools) {
          return <ToolItem data={tool} key={tool.id} />;
        }
        return true;
      })}
    </motion.div>
  );
};

export default ToolsList;
