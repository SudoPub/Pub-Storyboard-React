/**
 * @author WMXPY
 * @namespace Procedure
 * @description Procedure
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { ProcedureNode, PubStoryboard } from "../../src";

export default {
    title: "Procedure",
    component: ProcedureNode,
} as Meta<typeof ProcedureNode>;

const Template: StoryFn<typeof ProcedureNode> = (_args: any) => {

    return (
        <PubStoryboard
            width="512px"
            height="512px"
        >
            <ProcedureNode />
        </PubStoryboard>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Button",
};
