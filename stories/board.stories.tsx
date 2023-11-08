/**
 * @author WMXPY
 * @namespace Board
 * @description Board
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { BarkBoard } from "../src";

export default {
  title: "Board",
  component: BarkBoard,
} as Meta<typeof BarkBoard>;

const Template: StoryFn<typeof BarkBoard> = (args: any) => {

  return (
    <BarkBoard>
      {args.children}
    </BarkBoard>);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
