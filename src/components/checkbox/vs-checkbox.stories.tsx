import { ComponentStory } from "@storybook/react";
import VsCheckbox from "./index";

export default {
  title: "Components/Form Elements",
  component: VsCheckbox,
  argTypes: {
    containerStyle: { control: "inline-radio" },
    size: { control: "inline-radio" },
    boxBorderStyle: { control: "inline-radio" },
    boxColor: { control: "inline-radio" },
    alignment: { control: "inline-radio" },
    pattern: { control: "inline-radio" },
  },
};

const Template: ComponentStory<typeof VsCheckbox> = (args) => {
  return <VsCheckbox {...args}>Checkbox</VsCheckbox>;
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  containerStyle: "block",
  size: "md",
  boxBorderStyle: "default",
  boxColor: "default",
  alignment: "default",
  pattern: "default",
}
