import { ComponentStory } from "@storybook/react";
import VsCheckbox from "./index";

export default {
  title: "Components/Form Elements",
  component: VsCheckbox,
  argTypes: {
    boxBorderStyle: { control: "inline-radio", options: ["none", "default", "rounded"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg", "xl"] },
    containerStyle: { control: "inline-radio", options: ["block", "inline"] },
    alignment: { control: "inline-radio", options: ["default", "right", "top", "bottom"] },
    pattern: { control: "inline-radio", options: ["default", "button"] },
  },
};

const Template: ComponentStory<typeof VsCheckbox> = (args) => {
  return <VsCheckbox {...args}>Checkbox</VsCheckbox>;
};

export const Checkbox = Template.bind({});
