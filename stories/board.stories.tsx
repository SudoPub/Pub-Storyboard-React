/**
 * @author WMXPY
 * @namespace Board
 * @description Board
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Board } from "../src";

export default {
  title: "Board",
  component: Board,
} as Meta<typeof Board>;

const Template: StoryFn<typeof Board> = (args: any) => {

  return (
    <Board>
      {args.children}
    </Board>);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
