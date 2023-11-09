/**
 * @author WMXPY
 * @namespace Hooks_UseWorkflow
 * @description Use Workflow
 */

import { PubWorkflowConfiguration } from "@sudopub/essential";
import * as React from "react";
import { Edge, addEdge, useEdgesState, useNodesState } from "reactflow";
import { WorkflowController } from "./definition";

const initialNodes = [
    { id: '1', type: 'procedure', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', type: 'procedure', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges: Edge[] = [{
    id: 'e1-2',
    source: '1',
    target: '2',
    sourceHandle: 's1',
    targetHandle: 't1',
}];

export const usePubWorkflow = (
    _workflow: PubWorkflowConfiguration,
): WorkflowController => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


    const onConnect = React.useCallback(
        (params: any) => setEdges((eds) => {
            console.log(params, eds);
            return addEdge(params, eds);
        }),
        [setEdges],
    );

    return {

        nodes,
        edges,

        setNodes,
        setEdges,

        onNodesChange,
        onEdgesChange,

        onConnect,
    };
};
