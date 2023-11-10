/**
 * @author WMXPY
 * @namespace Components_Procedure
 * @description Procedure
 */

import { createStringPattern } from "@sudoo/pattern";
import { PUB_PROCEDURE_TYPE, PubProcedureConfiguration } from "@sudopub/essential";
import * as React from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledButton = styled.button`
    background-color: red;
`;

export type ProcedureNodeProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

const exampleProcedure: PubProcedureConfiguration<PUB_PROCEDURE_TYPE.DRIVER> = {

    identifier: "test",
    type: PUB_PROCEDURE_TYPE.DRIVER,
    payload: {
        driverName: "test",
        parameterPatterns: {
            in: createStringPattern(),
        },
        outcomePatterns: {
            out: createStringPattern(),
        },
    },
};

export const ProcedureNode: React.FC<ProcedureNodeProps> = (_props: ProcedureNodeProps) => {

    return (<React.Fragment>
        <Handle
            type="target"
            id="t2"
            position={Position.Top}
        />
        <div style={{
            width: '256px',
            border: '1px solid #000',
        }}>
            <div style={{
                display: 'flex',
            }}>
                <div style={{ flex: 1 }}>
                    {Object.keys(exampleProcedure.payload.parameterPatterns).map((key: string) => {
                        return (<div key={key}>
                            {key}
                        </div>);
                    })}
                </div>
                <div style={{ flex: 1 }}>
                    {Object.keys(exampleProcedure.payload.outcomePatterns).map((key: string) => {
                        return (<div key={key}>
                            {key}
                        </div>);
                    })}

                </div>
            </div>
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
