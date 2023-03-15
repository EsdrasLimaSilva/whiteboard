import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position } from "reactflow";

import "@reactflow/node-resizer/dist/style.css";

const Square = ({ selected }: NodeProps) => {
   return (
      <div className="bg-violet-700 rounded-md w-full h-full min-w-[200px] min-h-[200px]">
         <NodeResizer
            minWidth={200}
            minHeight={200}
            isVisible={selected}
            lineClassName="border-blue-400"
            handleClassName="w-4 h-4 bg-gray-50 border-2 border-blue-500"
         />

         <Handle
            id="right"
            type="source"
            position={Position.Right}
            className="-right-3 w-3 h-3 border-2 bg-transparent border-blue-500"
         />
         <Handle
            id="left"
            type="source"
            position={Position.Left}
            className="-left-3 w-3 h-3 border-2 bg-transparent border-blue-500"
         />
         <Handle
            id="top"
            type="source"
            position={Position.Top}
            className="-top-3 w-3 h-3 border-2 bg-transparent border-blue-500"
         />
         <Handle
            id="bottom"
            type="source"
            position={Position.Bottom}
            className="-bottom-3 w-3 h-3 border-2 bg-transparent border-blue-500"
         />
      </div>
   );
};

export default Square;
