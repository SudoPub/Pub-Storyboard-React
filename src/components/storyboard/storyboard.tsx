/**
 * @author WMXPY
 * @namespace Components_Storyboard
 * @description Storyboard
 */

import * as React from "react";
import ReactFlow, { Background, BackgroundVariant, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { usePubNodeTypes } from "../../hooks/use-node-types";
import { WorkflowController } from "../../hooks/use-workflow/definition";
import { usePubWorkflow } from "../../hooks/use-workflow/use-workflow";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

export type PubStoryboardProps =
    & {
        readonly width: string;
        readonly height: string;
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export const PubStoryboard: React.FC<PubStoryboardProps> = (props: PubStoryboardProps) => {

    const nodeTypes = usePubNodeTypes();
    const workflowController: WorkflowController = usePubWorkflow(null as any);

    return (<div style={{
        width: props.width,
        height: props.height,
    }}>
        <ReactFlow
            nodeTypes={nodeTypes}
            nodes={workflowController.nodes}
            edges={workflowController.edges}
            onNodesChange={workflowController.onNodesChange}
            onEdgesChange={workflowController.onEdgesChange}
            onConnect={workflowController.onConnect}
        >
            <Controls />
            <MiniMap />
            <Background
                variant={BackgroundVariant.Dots}
                gap={12}
                size={1}
            />
        </ReactFlow>
    </div>);
};
