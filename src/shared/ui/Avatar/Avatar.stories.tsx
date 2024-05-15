import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from './storybook.jpg';
import Avatar from './Avatar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const AvatarPrimary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export { AvatarPrimary as Avatar };
