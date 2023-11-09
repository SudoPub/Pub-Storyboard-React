/**
 * @author WMXPY
 * @namespace Components_Procedure
 * @description Procedure
 */

import * as React from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

const StyledButton = styled.button`
    background-color: red;
`;

export type ProcedureNodeProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export const ProcedureNode: React.FC<ProcedureNodeProps> = (_props: ProcedureNodeProps) => {

    const onChange = React.useCallback((event: any) => {
        console.log(event.target.value);
    }, []);

    return (<React.Fragment>
        <Handle
            type="target"
            id="t2"
            position={Position.Top}
        />
        <div>
            <label
                htmlFor="text"
            >
                Text:
            </label>
            <input
                name="text"
                onChange={onChange}
                className="nodrag"
            />
            <StyledButton />
        </div>
        <Handle type="source" position={Position.Bottom} id="s1" />
        <Handle
            type="source"
            position={Position.Bottom}
            id="s2"
            style={{
                left: 10,
            }}
        />
        <Handle
            type="target"
            position={Position.Bottom}
            id="t1"
            style={{
                left: 50,
            }}
        />
    </React.Fragment>);
};
