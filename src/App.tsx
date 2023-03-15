import * as Toolbar from "@radix-ui/react-toolbar";
import { useCallback } from "react";
import ReactFlow, {
   addEdge,
   Background,
   Connection,
   ConnectionMode,
   Controls,
   Node,
   useEdgesState,
   useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { zinc } from "tailwindcss/colors";
import DefaultEdge from "./components/edges/DefaultEdge";
import Square from "./components/nodes/Square";

const NODE_TYPES = {
   square: Square,
};

const EDGE_TYPES = {
   default: DefaultEdge,
};

const INITIAL_NODES = [
   {
      id: crypto.randomUUID(),
      type: "square",
      position: {
         x: 200,
         y: 400,
      },
      data: {},
   },

   {
      id: crypto.randomUUID(),
      type: "square",
      position: {
         x: 500,
         y: 400,
      },
      data: {},
   },
] satisfies Node[];

const App = () => {
   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
   const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

   const onConnect = useCallback((connection: Connection) => {
      return setEdges((edges) => addEdge(connection, edges));
   }, []);

   const addSquareNode = () => {
      setNodes((nodes) => [
         ...nodes,
         {
            id: crypto.randomUUID(),
            type: "square",
            position: {
               x: 100,
               y: 100,
            },
            data: {},
         },
      ]);
   };

   return (
      <div className="w-screen h-screen bg-zinc-100">
         <ReactFlow
            nodeTypes={NODE_TYPES}
            edgeTypes={EDGE_TYPES}
            defaultEdgeOptions={{ type: "default" }}
            nodes={nodes}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onNodesChange={onNodesChange}
            onConnect={onConnect}
            connectionMode={ConnectionMode.Loose}
         >
            <Background gap={12} size={2} color={zinc[300]} />
            <Controls />
         </ReactFlow>

         <Toolbar.Root className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-50 rounded-md  shadow-lg border border-zinc-400 h-12 p-4 w-96 overflow-hidden">
            <Toolbar.Button
               className="w-20 h-12 bg-violet-700 transition-all hover:-translate-y-3  ease-in-out rounded-sm"
               onClick={addSquareNode}
            />
         </Toolbar.Root>
      </div>
   );
};

export default App;
