/**
 * @author WMXPY
 * @namespace Storyboard
 * @description Simple
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { PubStoryboard } from "../../src";

export default {
  title: "Storyboard",
  component: PubStoryboard,
} as Meta<typeof PubStoryboard>;

const Template: StoryFn<typeof PubStoryboard> = (_args: any) => {

  return (
    <PubStoryboard
      width="512px"
      height="512px"
    />
  );
};

export const SimpleStoryboard = Template.bind({});

SimpleStoryboard.args = {
  children: "Button",
};
