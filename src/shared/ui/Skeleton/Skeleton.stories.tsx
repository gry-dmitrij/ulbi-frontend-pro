import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Skeleton from './Skeleton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SkeletonPrimary: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
};

export { SkeletonPrimary as Skeleton };

export const SkeletonCircle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
};

export const SkeletonDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const SkeletonCircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
