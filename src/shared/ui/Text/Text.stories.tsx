import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextSize, TextTheme } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  args: {
    title: 'Title',
    text: 'Text',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const TextPrimary: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export { TextPrimary as Text };

export const TextOnlyTitle : Story = {
  args: {
    text: undefined,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TextOnlyText : Story = {
  args: {
    title: undefined,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TextDark : Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextError : Story = {
  args: {
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TextSizeL : Story = {
  args: {
    size: TextSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
