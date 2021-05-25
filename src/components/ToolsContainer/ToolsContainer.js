import { Tool } from '../Tool';
import { toolsData } from './data';
import './ToolsContainer.scss'

const ToolsContainer = ({numberOfTools}) => {
    return (
        <div className="tools-container">
            {toolsData.map(tool => {
                if(tool.id <= numberOfTools) {
                    return <Tool data={tool} key={tool.id} />
                }
                return true;
            })}
        </div>
    )
}

export default ToolsContainer
