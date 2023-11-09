/**
 * @author WMXPY
 * @namespace Hooks
 * @description Use Node Types
 */

import * as React from "react";
import { ProcedureNode } from "../components/procedure/procedure";
import { NodeTypes } from "reactflow";

export const usePubNodeTypes = (): NodeTypes => {

    return React.useMemo(() => {
        return {
            procedure: ProcedureNode,
        };
    }, []) as any;
};
