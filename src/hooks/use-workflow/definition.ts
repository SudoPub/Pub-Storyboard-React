/**
 * @author WMXPY
 * @namespace Hooks_UseWorkflow
 * @description Definition
 */

import { Edge, Node as FlowNode, OnConnect, OnEdgesChange, OnNodesChange } from "reactflow";

export type WorkflowController = {

    readonly nodes: FlowNode[];
    readonly edges: Edge[];

    readonly setNodes: (nodes: FlowNode[]) => void;
    readonly setEdges: (edges: Edge[]) => void;

    readonly onNodesChange: OnNodesChange;
    readonly onEdgesChange: OnEdgesChange;

    readonly onConnect: OnConnect;
};
