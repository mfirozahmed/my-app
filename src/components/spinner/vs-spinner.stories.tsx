import { ComponentStory } from '@storybook/react';
import VsSpinner from './index';

export default {
  title: 'Components/Icons',
  component: VsSpinner,
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'xl'] }
  }
};

const Template: ComponentStory<typeof VsSpinner> = (args) => {
  return <VsSpinner {...args}></VsSpinner>;
};

export const Spinner = Template.bind({});
