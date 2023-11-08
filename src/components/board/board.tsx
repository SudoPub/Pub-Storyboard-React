/**
 * @author WMXPY
 * @namespace Components_Board
 * @description Board
 */

import * as React from "react";
import styled from "styled-components";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

const StyledButton = styled.button`
    background-color: red;
`;

export type BoardProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export const Board: React.FC<BoardProps> = (props: BoardProps) => {

    return (<StyledButton>
        {props.children}
    </StyledButton>);
};
