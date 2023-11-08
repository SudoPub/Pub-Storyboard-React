/**
 * @author WMXPY
 * @namespace Components_Board
 * @description Board
 */

import React from "react";
import styled, { StyledComponent } from "styled-components";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

const StyledButton: StyledComponent<"button", any> = styled.button`
    background-color: red;
`;

export type BoardProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export const BarkBoard: React.FC<BoardProps> = (props: BoardProps) => {

    return (<StyledButton>
        {props.children}
    </StyledButton>);
};
