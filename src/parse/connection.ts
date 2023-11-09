/**
 * @author WMXPY
 * @namespace Parse
 * @description Connection
 */

import { PubConnectionConfiguration } from "@sudopub/essential";
import { Edge } from "reactflow";

export const parseConnectionToEdge = (
    connection: PubConnectionConfiguration,
): Edge => {

    return {
        id: connection.identifier,
        source: connection.triggerProcedureIdentifier,
        target: connection.nextProcedureIdentifier,
        type: "smoothstep",
        animated: true,
        data: {
            label: connection.identifier,
            connection,
        },
    };
};
