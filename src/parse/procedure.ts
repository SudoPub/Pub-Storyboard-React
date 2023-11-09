/**
 * @author WMXPY
 * @namespace Parse
 * @description Procedure
 */

import { PubProcedureConfiguration } from "@sudopub/essential";
import { Node as FlowNode } from "reactflow";

export const parseProcedureToNode = (
    procedure: PubProcedureConfiguration,
): FlowNode => {

    return {
        id: procedure.identifier,
        type: "procedure",
        position: {
            x: 0,
            y: 0,
        },
        data: {
            label: procedure.identifier,
            procedure,
        },
    };
};
